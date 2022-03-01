import { useState, useEffect, useCallback, useContext } from "react";
import styled from "styled-components";
import Item from "./Item";
import Modal from "./Modal";

import http from "../http";

const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3em;
  row-gap: 6em;
  padding: 30px;
  position: relative;
`;

function Coffee() {
  const [selectedItem, setSelectedItem] = useState({});
  const [active, setActive] = useState(false);
  const [coffeeItems, setCoffeeItems] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    let response = await http.get("/products", {
      params: { category: "coffee" },
    });

    setCoffeeItems(response.data);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  function handleClick(item) {
    setSelectedItem({ ...item });
    setActive(true);
  }

  return (
    <div>
      <CoffeeGrid>
        {coffeeItems.map((item) => (
          <Item
            onClick={() => handleClick(item)}
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </CoffeeGrid>
      <Modal
        active={active}
        setActive={setActive}
        name={selectedItem.name}
        price={selectedItem.price}
        description={selectedItem.description}
        image={selectedItem.image}
      />
    </div>
  );
}

export default Coffee;
