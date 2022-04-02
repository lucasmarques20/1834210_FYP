import { useEffect, useState } from "react";
import styled from "styled-components";
// import { AllProducts } from "../sliderdata"; // old local database 
import SingleProduct from "./SingleProduct";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -350px;
    background-color: #f7f7f7;
`

const Products = ({categories, filters}) => {
    
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await axios.get
                (`http://localhost:5000/api/products?categories=${categories}`); 

                setProducts(res.data);
                console.log(res)
            }
            catch (err) {}    
        }
        getProducts()
    }, [categories])
    
    // Filter Products
    useEffect(()=> {
        categories && setFilteredProducts(products.filter((item) => 
        Object.entries(filters).every(([key, value]) => item[key].includes(value)))) 
    },[products, categories, filters])
    
    return (
    <Container>
      {filteredProducts.map(item => 
      ( <SingleProduct item = {item} key = {item.id}/>
      ))}
      
  </Container>
  );
}

export default Products;

