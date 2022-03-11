import styled from "styled-components"

const Container = styled.div`
    position: relative;
    top: 100%;
    width: 100%;
    
` 

const ImageContainer = styled.div`  
    position: relative;
    height: 100%;
`

const Image = styled.img`
    width: 101.1%;
    height: 55%;
    position: relative;
    object-fit: cover;
    margin-left:-10px;
`  

const Button = styled.button`
    display: flex;
    border: none;
    padding: 20px;
    border-radius: 32px;
    cursor: pointer;
    position: absolute;
    color: black;
    font-weight: 800;
    font-size: 20px;
    height: 60px;
    width: 201px;
    top: 25%;
    left: 85.5vh;
    flex-wrap: wrap;

    &:hover{
      background-color: #e5effd;
      transform: scale(1.1);
    }

    transition: all 0.2s ease;
` 

const Items = ({item}) => {
  return <Container>
      <ImageContainer>
      <Image src = {item.img}/>
          <Button>
              VIEW PRODUCTS
          </Button>
        </ImageContainer>

  </Container>;
};

export default Items;
