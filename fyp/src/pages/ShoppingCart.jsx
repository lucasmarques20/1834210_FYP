import { AddCircleOutlined, RemoveCircleOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Questions from '../components/Questions'


const Container = styled.div `
`

const Container2 = styled.div`
    background-color: #f7f7f7;
    margin-top: 50px;
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 400;
`

const Top = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 15px;
`
const Buttons = styled.button`
    font-weight: 800; 
    padding: 15px;
    border-radius: 10px;
    color: black;
    background-color: white;
    cursor: pointer;

    &:hover{
      background-color: #e5effd;
    }
    
    transition: all 0.2s ease;
`

// const Texts = styled.div`
// `

const ShoppingCartTitle = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bot = styled.div`
    display: flex;
    justify-content: space-between;
`

const Information = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductInformation = styled.div`
    flex: 2;
    display: flex;
`

const Img = styled.img`
    border: 3px solid black;
    width: 250px;
    border-radius: 10px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Name = styled.span`
    font-weight: 600;
`

const Size = styled.span`
    font-weight: 600;
`

const PriceDetails = styled.div`
    flex: 1;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InformationContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const Amount = styled.span`
    font-size: 20px;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 10px;
    display: flex;
`  

const Price = styled.div`
    font-size: 20px;
`

const SummaryInformation = styled.div`
    flex: 1;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
`

const SummaryTitle = styled.h1`
    font-weight: 600;
`

const SummaryItem = styled.div`  
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    
`

const Text = styled.span`
    font-size: 20px;
`

const ProductPrices = styled.span`   
`

const CashoutButton = styled.button`
    font-weight: 800; 
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    color: white;
    background-color: black;
    cursor: pointer;

    &:hover{
      background-color: #e5effd;
    }
    
    transition: all 0.2s ease;
`

const ShoppingCart = () => {
  return (
    <Container>
        <NavigationBar/>
        <Container2>
            <Wrapper>
            <Title>
                YOUR CART
            </Title>
            <Top>
                <Buttons> CONTINUE SHOPPING </Buttons>
                {/* <Texts>
                    <ShoppingCartTitle> Shopping Cart(1)</ShoppingCartTitle>
                </Texts> */}
            </Top>
            <Bot>
                <Information>
                    <Product>
                    <ProductInformation>
                    <Img src = "https://yt3.ggpht.com/ytc/AKedOLQTxWiKJ2-n6RPoLq1XskpeLFu02J30pgs7lYBR=s900-c-k-c0x00ffffff-no-rj" />
                        <Details>
                        <Name> Name: (Product Name)</Name>
                        <Size> Size: (Product Size)</Size>
                        </Details>
                    </ProductInformation>
                    <PriceDetails>
                        <InformationContainer>
                            <AddCircleOutlined/>
                            <Amount>1</Amount>
                            <RemoveCircleOutlined/>
                        </InformationContainer>
                        <Price> £0.00 </Price>
                    </PriceDetails>
                    </Product>
                </Information>
                <SummaryInformation>
                    <SummaryTitle> YOUR ORDER </SummaryTitle>
                    <SummaryItem>
                        <Text> Subtotal </Text>
                        <ProductPrices> £0.00 </ProductPrices>
                    </SummaryItem>
                    <SummaryItem>
                        <Text> Delivery Fee </Text>
                        <ProductPrices> £0.00 </ProductPrices>
                    </SummaryItem>
                    <SummaryItem>
                        <Text> Discount </Text>
                        <ProductPrices> £0.00 </ProductPrices>
                    </SummaryItem>
                    <hr/>
                    <SummaryItem>
                        <Text type = "total" > Total </Text>
                        <ProductPrices> £0.00 </ProductPrices>
                    </SummaryItem>
                    <CashoutButton> CHECKOUT</CashoutButton>
                </SummaryInformation>
            </Bot>
            </Wrapper>
        </Container2>
        <Questions/>
        <Footer/>

        
    </Container>
  )
}

export default ShoppingCart