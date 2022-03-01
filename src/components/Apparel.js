import styled from "styled-components";
import Item from "./Item";
import { useState, useEffect, useCallback } from "react";
import Modal from "./Modal";

import http from "../http";

const ShopDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3em;
  row-gap: 6em;
  padding: 30px;
  position: relative;
`;

function Apparel() {
  const [selectedItem, setSelectedItem] = useState({});
  const [active, setActive] = useState(false);
  const [apparelItems, setApparelItems] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    let response = await http.get("/products", {
      params: { category: "apparel" },
    });

    setApparelItems(response.data);
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
        {apparelItems.map((item) => (
          <Item
            onClick={() => handleClick(item)}
            key={item.key}
            name={item.name}
            price={item.price}
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

export default Apparel;
