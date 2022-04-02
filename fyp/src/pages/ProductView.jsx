import { AddCircleOutlined, RemoveCircleOutlined } from '@material-ui/icons'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Questions from '../components/Questions'
// import { request } from '../requests'

const Container = styled.div``

const Container2 = styled.div`
   background-color: #f7f7f7;
   margin-top: 50px;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 2;
`

const Image = styled.img`
    width: 80%;
    height: 80vh;
    object-fit: cover;
    border: 3px solid black;
    border-radius: 10px;
`

const InformationContainer = styled.div`
    flex: 2;
    padding: 0px 50px;
`

const Title = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px;
    font-size: 20px;
`

const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`


const Filter = styled.div`
    display: flex;
    align-items: center;
`


const Name = styled.span`
    font-size: 20px;
`


const Size = styled.select`
    font-size: 16px;
    margin-left: 10px;
    padding: 8px;

`

const Option = styled.option`

`

const TickContainer = styled.div`

`

const AmountContainer = styled.div`
    display: flex;
    width: 45%;
    align-items: center;
    justify-content: space-between;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
`

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
`

const Button = styled.button`
    padding: 20px;
    border-radius: 10px;
    color: black;
    background-color: white;
    font-weight: 800;
    cursor: pointer;

    &:hover{
      background-color: #e5effd;
    }
    
    transition: all 0.2s ease;
`

const ProductView = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const getProduct = async () => {
        try{
            const res = await axios.get ("http://localhost:5000/api/products/find/"+id ); 
            setProduct(res.data); 
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
        getProduct()
        // console.log(id)
        // console.log(location)
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "remove") 
        {
           quantity > 1 && setQuantity(quantity - 1)
        }
        else 
        {
            setQuantity(quantity + 1)
        }
    }

    function handleFilter() {

        if (product.id > 13) {
            return null;
        }
        else {
            return (<Filter/>)
        }
    }
    console.log(product.id)

  return (
    <Container>
        <NavigationBar/>
        <Container2>

        <Wrapper>
            <ImageContainer>
                <Image src = {product.img}/>
            </ImageContainer>
            <InformationContainer>
                <Title>
                    {product.title}
                </Title>
                <Description>
                    {product.description}
                </Description>
                <Price>
                    £{product.price}
                </Price>
                <FilterContainer onLoad={handleFilter()} > 
                    {/* "onLoad" event above not working */}
                    <Filter>
                        <Name>Size</Name>
                        <Size> 
                           <Option> Small Junior </Option> 
                           <Option> Medium Junior </Option> 
                           <Option> Large Junior </Option> 
                           <Option> Youth </Option> 
                           <Option> Small </Option> 
                           <Option> Medium </Option> 
                           <Option> Large </Option> 
                           <Option> X Large </Option> 
                           <Option> XX Large </Option> 
                           {/* Sizes are only supposed to be displayed to Sportswear products
                           and not Merch products (problem I could not fix)*/}
                        </Size>
                    </Filter>
                </FilterContainer>

                <TickContainer>

                </TickContainer>

                <AmountContainer>
                    <ButtonsContainer>
                        <RemoveCircleOutlined cursor = "pointer" onClick = {() => handleQuantity("remove")} />
                            <Amount>
                                {quantity}
                            </Amount>
                        <AddCircleOutlined cursor = "pointer" onClick = {() => handleQuantity("add")}/>
                    </ButtonsContainer>
                    <Button>ADD TO CART</Button>
                </AmountContainer>

            </InformationContainer>
        </Wrapper>
        </Container2>

        <Questions/>
        <Footer/>
    </Container>
  )
}

export default ProductView