import styled from "styled-components";
import { categories } from "../sliderdata";
import Items from "./Items";

const Container = styled.div`
        display: flex;
        padding: 20px;
        background-color: #f7f7f7;
        margin-bottom: -368px;
`

const Categories = () => {
  return <Container>
      {categories.map(item=>(
          <Items item = {item} key={item.id}/>
      ))}

  </Container>;
};

export default Categories;
