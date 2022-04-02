import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from 'react';
import { SliderItems } from "../sliderdata";

const Container = styled.div`
    margin-top: 45px;
    width: 100%;
    height: 41vh;
    display: flex; 
    background-color: #385072;
    position: relative;
    overflow: hidden;
    
`

const Arrow = styled.div`  
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.6;
    z-index: 2;

    &:hover{
      background-color: #e5effd;
      transform: scale(1.1);
    }
    
    transition: all 0.2s ease;
`;

const Wrapper = styled.div`  
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1s ease;

`

const Slide = styled.div`  
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`  
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 41.4%;
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState (0);
    const handleClick = (direction) => {

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 4)
        }
        else {
            setSlideIndex(slideIndex < 4 ? slideIndex +1 : 0);
        }  
        
    };

  return  <Container>
            <Arrow direction = "left" onClick={ () => handleClick("left")}>
                <KeyboardArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {SliderItems.map(item=>(
                <Slide key={item.id}>
                <ImgContainer> 
                    <Image src ={item.img}/>
                </ImgContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={ () => handleClick("right")}>
                <KeyboardArrowRightOutlined/>
            </Arrow>
         </Container>;
         
};

export default Slider;
