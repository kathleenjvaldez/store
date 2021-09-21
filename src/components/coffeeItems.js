import ChemexImage from "../images/Chemex.jpeg";
import MilkPitcher from "../images/MilkPitcher.jpeg";
import DripKettle from "../images/DripKettle.jpeg";
import CoffeeServer from "../images/CoffeeServer.jpeg";

const coffeeItems = [
  {
    key: 1,
    name: "Classic Chemex Coffee Maker",
    price: 49.95,
    image: ChemexImage,
    description:
      "The Chemex Coffee Maker delivers a pure and clean flavor experience.",
  },
  {
    key: 2,
    name: "Black Milk Pitcher",
    price: 21.95,
    image: MilkPitcher,
  },
  {
    key: 3,
    name: "Drip Kettle",
    price: 44.95,
    image: DripKettle,
  },
  {
    key: 4,
    name: "Hario Coffee Server",
    price: 52.95,
    image: CoffeeServer,
  },
];

export default coffeeItems;
