import { Link } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";


const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    opacity: 0;
    border-radius: 15px;
    transition: all 0.2s ease;
    cursor: pointer;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    max-width: 350px;
    height: 350px;
    position: relative;
    display: flex;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: #ebebeb;

    &:hover ${Info}{
      opacity: 1;
    }
`

const Circle = styled.div`
    width: 302px;
    height: 302px;
    position: absolute;
    background-color: white;
    border-radius: 50%;
`
const Image = styled.img`
    height: 61%;
    z-index: 2;
`

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background-color: #eff5fd;
      transform: scale(1.2);
    }

    transition: all 0.2s ease;
` 


export const SingleProduct = ({item}) => {
  return <Container>
      <Circle/>
          <Image src = {item.img}/>
          <Link to = {`/product/${item._id}`}>
            <Info>
              <Icon>
                <SearchOutlined/>
              </Icon>
            </Info>
          </Link>
  </Container>
}

export default SingleProduct;

