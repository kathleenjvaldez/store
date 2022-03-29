import ChemexImage from "../images/Chemex.jpeg";
import MilkPitcher from "../images/MilkPitcher.jpeg";
import DripKettle from "../images/DripKettle.jpeg";
import CoffeeServer from "../images/CoffeeServer.jpeg";
import CoffeeBag from "../images/coffeebag.png";
import CoffeeBag2 from "../images/coffeebag2.png";

const coffeeItems = [
  {
    key: 1,
    name: "Easy Ride Coffee",
    price: 15.99,
    image: CoffeeBag,
    description:
      "This blend lives nestled between a bar of dark chocolate and a gooey marshmallow spread.",
  },
  {
    key: 2,
    name: "San Pedro Yosotatu",
    price: 18.5,
    image: CoffeeBag2,
    description:
      "Expect a welcoming cup with marzipan sweetness, a soft pear acidity and a buttery texture.",
  },
  {
    key: 3,
    name: "Classic Chemex Coffee Maker",
    price: 49.95,
    image: ChemexImage,
    description:
      "The Chemex Coffee Maker delivers a pure and clean flavor experience.",
  },
  {
    key: 4,
    name: "Black Milk Pitcher",
    price: 21.95,
    image: MilkPitcher,
  },
  {
    key: 5,
    name: "Drip Kettle",
    price: 44.95,
    image: DripKettle,
  },
  {
    key: 6,
    name: "Hario Coffee Server",
    price: 52.95,
    image: CoffeeServer,
  },
];

export default coffeeItems;
