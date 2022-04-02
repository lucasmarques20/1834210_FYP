import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div `
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
outline: none;
`;

const Center = styled.div `
flex: 1;
text-align: center;
`;

const Image = styled.img`
width: 85px;
`

const Right = styled.div `
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
a
{
    color: black;
    text-decoration-color: black;
    outline: none;
    text-decoration: none;
}
`

const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 25px;
`

const NavigationBar = () => {
  return <Container>
            <Wrapper>
                <Left> 
                  <Language>EN</Language>
                  <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                  </SearchContainer>
                </Left>
                <Link to = {`/`}>
                <Center>
                  <Image src = "https://brunelstudents.com/stylesheet/UrbanDesign/union-brand.svg" />
                </Center>
                </Link>
                <Right>
                  <Link to = {`/signup`}>
                    <MenuItem>SIGN UP</MenuItem>
                  </Link>
                  <Link to = {`/login`}>
                    <MenuItem>LOGIN</MenuItem>
                  </Link>
                  <MenuItem>
                    <Badge badgeContent={0} color = "primary"> 
                    <Link to = {`/shoppingcart`}>
                    <ShoppingCartOutlined />
                    </Link>
                    </Badge>
                  </MenuItem>
                </Right>
            </Wrapper>
        </Container>;
};

export default NavigationBar;
