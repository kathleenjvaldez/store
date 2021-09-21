import styled from "styled-components";
import Item from "./Item";
import wellnessItems from "./wellnessItems";

const ShopDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4em;
  row-gap: 6em;
  padding: 50px;
`;

function Wellness() {
  return (
    <ShopDiv>
      {wellnessItems.map((item) => (
        <Item
          key={item.key}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </ShopDiv>
  );
}

export default Wellness;
