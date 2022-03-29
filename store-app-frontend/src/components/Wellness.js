import styled from "styled-components";
import Item from "./Item";
import { useState, useEffect, useCallback } from "react";
import Modal from "./Modal";

import http from "../http";

const ShopDiv = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 0.2fr;
  grid-gap: 50px;
`;

function Wellness() {
  const [selectedItem, setSelectedItem] = useState({});
  const [active, setActive] = useState(false);
  const [wellnessItems, setWellnessItems] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    let response = await http.get("/products", {
      params: { category: "wellness" },
    });

    setWellnessItems(response.data);
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
      <ShopDiv>
        {wellnessItems.map((item) => (
          <Item
            onClick={() => handleClick(item)}
            key={item.key}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </ShopDiv>
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

export default Wellness;
