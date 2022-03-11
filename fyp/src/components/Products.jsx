import styled from "styled-components";
import { Merchproducts } from "../sliderdata";
import { Surridgeproducts } from "../sliderdata";
import SingleProduct from "./SingleProduct";

const Container = styled.div`
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -350px;
    background-color: #f7f7f7;
`

export const Prodcuts = () => {
  return <Container>
      {Merchproducts.map(item => (
          <SingleProduct item = {item} key = {item.id}/>
      ))}
      {Surridgeproducts.map(item => (
            <SingleProduct item = {item} key = {item.id}/>
      ))}

  </Container>;
}

export default Prodcuts;

