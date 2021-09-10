import styled from "styled-components";
import Item from "./Item";
import coffeeItems from "./coffeeItems";
import { useState } from "react";
import Modal from "./Modal";

const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3em;
  row-gap: 6em;
  padding: 30px;
`;

function Coffee() {
  const [selectedItem, setSelectedItem] = useState({});
  const [active, setActive] = useState(false);

  function handleClick(item) {
    setSelectedItem({ ...item });
    setActive(true);
    console.log("clicked");
  }

  return (
    <div>
      <CoffeeGrid>
        {coffeeItems.map((item) => (
          <Item
            onClick={() => handleClick(item)}
            key={item.key}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </CoffeeGrid>
      <Modal
        active={active}
        name={selectedItem.name}
        price={selectedItem.price}
        image={selectedItem.image}
      />
    </div>
  );
}

export default Coffee;
