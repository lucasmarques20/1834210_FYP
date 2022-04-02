import React from 'react'
import styled from 'styled-components'
import NavigationBar from "../components/NavigationBar";
import Products from "../components/Products";
import QuestionsProductPage from '../components/QuestionsProductPage';
import FooterProductPage from '../components/FooterProductPage';
import { useState } from 'react'; 

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
    align-items: left;
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
    var categories = document.cookie.replace(/(?:(?:^|.*;\s*)filter\s*\=\s*([^;]*).*$)|^.*$/, "$1"); // Using cookie
    const [filters, setFilters] = useState({})

    const handleFilters = (event) => {
        const value = event.target.value;
        categories = value;
        console.log(categories)
        setFilters({
            ...filters,
            [event.target.name]:value,
        });
        document.cookie = "filter="+value;
        window.location.reload()
    };

  return (
        <Container>
            <NavigationBar/>
            <Container2>
            <Title>
                Our Products
            </Title>
            <FilterContainer>
            <Filter><FilterText> Filters: </FilterText></Filter>
            <Select name = "filter" onChange={handleFilters}>
                <SelectOption> Choose Filter </SelectOption>
                <SelectOption value="All"> All </SelectOption>
                <SelectOption value="Male"> Male </SelectOption>
                <SelectOption value="Female"> Female </SelectOption>
                <SelectOption value="Merch"> Merch </SelectOption>
                <SelectOption value="Sportswear"> Sportswear </SelectOption>

            </Select>
            </FilterContainer>
            <Products categories = {categories} filters = {filters}/>
            </Container2>
            <QuestionsProductPage/>
            <FooterProductPage/>
        </Container>
  )
}

export default List