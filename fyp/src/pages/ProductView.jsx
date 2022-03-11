import { AddCircleOutlined, RemoveCircleOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Questions from '../components/Questions'

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
    font-size: 30px;
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
  return (
    <Container>
        <NavigationBar/>
        <Container2>

        <Wrapper>
            <ImageContainer>
                <Image src = "https://www.surridgesport.com/content/images/thumbs/0111110_brunel-university-dual-gym-shirt.jpeg"/>
            </ImageContainer>
            <InformationContainer>
                <Title>
                    BRUNEL UNIVERSITY DUAL GYM SHIRT
                </Title>
                <Description>
                Brunel University Dual Gym Shirt with Team Brunel left chest, SS logo printed right chest in white, 
                Bespoke yellow dual print to shoulders, option of sport name printed to reverse in white and option of initials printed above SS in white.
                </Description>
                <Price>
                    £18.15
                </Price>
                <FilterContainer>
                    <Filter>
                        <Name>Size</Name>
                        <Size> 
                           <Option> 8 </Option> 
                           <Option> 10 </Option> 
                           <Option> 12 </Option> 
                           <Option> 14 </Option> 
                           <Option> 16 </Option> 
                           <Option> L </Option> 
                           <Option> XL </Option> 
                           <Option> XXL </Option> 
                        </Size>
                    </Filter>
                </FilterContainer>

                <TickContainer>

                </TickContainer>

                <AmountContainer>
                    <ButtonsContainer>
                        <RemoveCircleOutlined/>
                            <Amount>
                                1
                            </Amount>
                        <AddCircleOutlined/>
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