import React from 'react'
import styled from 'styled-components'
import NavigationBar from "../components/NavigationBar";
import Products from "../components/Products";
import QuestionsProductPage from '../components/QuestionsProductPage';
import FooterProductPage from '../components/FooterProductPage';

const Container = styled.div`
`

const Container2 = styled.div`
    background-color: #f7f7f7;
`

const Title = styled.h1`
    margin-top: 45px;
    position: relative;
    top: 10px;
    margin-left: 25px;
    
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 370px;
    margin-right: 35px;
    margin-left: 25px;
    margin-top: 15px;
`

const Filter = styled.div`
    margin: 10px; 
`

const FilterText = styled.span`
    font-size: 25px;
    font-weight: 500;
`

const Select = styled.select`
margin-left: -1000px;
font-size: 16px;

`

const SelectOption = styled.option`

`

const List = () => {
  return (
        <Container>
            <NavigationBar/>
            <Container2>
            <Title>
                Our Products
            </Title>
            <FilterContainer>
            <Filter><FilterText> Gender: </FilterText></Filter>
            <Select>
                <SelectOption disabled selected>
                     All 
                </SelectOption>
                <SelectOption> Male </SelectOption>
                <SelectOption> Female </SelectOption>
            </Select>
            <Filter><FilterText> Category: </FilterText></Filter>
            <Select>
                <SelectOption disabled selected>
                     All 
                </SelectOption>
                <SelectOption> Merch </SelectOption>
                <SelectOption> Sportswear </SelectOption>
            </Select>
            </FilterContainer>
            <Products/>
            </Container2>
            <QuestionsProductPage/>
            <FooterProductPage/>
        </Container>
  )
}

export default List