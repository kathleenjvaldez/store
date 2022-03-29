const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const AWS = require("aws-sdk");

app.use(express.json());
app.use(fileUpload());
app.use(cors());

dotenv.config();

// init s3 client
const s3Client = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "us-west-1",
});

const dbUrl = process.env.DB_URL
  ? process.env.DB_URL
  : "mongodb://localhost:27017/store-app-db";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

const userSchema = {
  name: String,
  email: String,
  password: String,
};

const productSchema = {
  name: {
    type: String,
    required: [true, "Please include a name"],
  },
  description: {
    type: String,
    required: [true, "Please include a description"],
  },
  category: {
    type: String,
    required: [true, "Please include a category"],
  },
  image: {
    type: String,
  },
  quantity: Number,
  price: Number,
};

const Product = mongoose.model("Product", productSchema);

app.get("/products", async function (req, res) {
  const category = req.query.category;
  // console.log(category);

  try {
    const foundProducts = await Product.find({
      category,
    });

    res.send(foundProducts);
  } catch (err) {
    res.send(err);
  }
});

app.post("/products", function (req, res) {
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category.toLowerCase(),
    quantity: req.body.quantity,
    price: req.body.price,
  });
  newProduct.save(function (err) {
    if (!err) {
      res.send("Successfully added a new product");
    } else {
      res.send(err);
    }
  });
});

app.put("/products/:productId", function (req, res) {
  console.log(req.body);

  Product.findById(req.params.productId, async function (err, product) {
    if (err) {
      return res.send({ message: "Error finding product" }).status(404);
    }

    console.log(product);

    // updating the product's properties
    Object.keys(req.body).map((prop) => {
      product[prop] = req.body[prop];
    });

    await product.save();

    res.send({
      message: "Successfully updated product",
      updatedProduct: product,
    });
  });
});

app.put("/products/:productId/upload", async function (req, res) {
  if (!req.params.productId) {
    return res.status(400).send({ message: "Missing parameter id" });
  }

  if (!mongoose.isValidObjectId(req.params.productId)) {
    return res.status(400).send({ message: "Error: Bad product id!" });
  }

  if (!req.files) {
    return res.status(400).send({ message: "Error: Forgot file!" });
  }

  // We have an image
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return res.status(404).send({ message: "Error: Product not found." });
  }

  // we do have a product
  const bucketName = process.env.BUCKET_NAME;
  const image = req.files.image;
  let data;
  try {
    data = await s3Client
      .upload({
        Bucket: bucketName,
        Key: image.name,
        Body: image.data,
      })
      .promise();
  } catch (e) {
    console.log(e);
  }

  const url = data.Location;
  product.image = url;
  await product.save();

  res.send({ product });
});

app.delete("/products/:productId", function (req, res) {
  Product.deleteOne({ _id: req.params.productId }, function (err) {
    if (!err) {
      res.send("Successfully deleted product");
    } else {
      res.send(err);
    }
  });
});

// const inventorySchema = {
//   productId:
//   quantity: Number,
// };

app.get("/", function (req, res) {
  res.send({ hello: "World" });
});

app.listen(process.env.PORT || 3001, function () {
  console.log("server stated on port 3001");
});
