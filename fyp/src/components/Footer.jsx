import { Facebook, Instagram, LocationOn, Phone, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: #385072;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
`
const Logo = styled.h1`
    width: 100%;
    font-size: 40px;
`
const Description = styled.p`
    margin: 40px 0px;
`

const Center = styled.div`
    flex: 1; 
    padding: 20px;
`
const Title1 = styled.h1`
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`
const IconsContainer = styled.div`
    margin-top: 20px;
`

const SocialContainer = styled.div`
    display: flex;
    color: white;
    width: 200px;
    margin-top: 0px;
    margin-left: 120px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center; 
    text-indent: 10px;
    
    a
{
    color: white;
    text-decoration-color: white;
    outline: none;
    text-decoration: none;
}

&:hover{
    text-decoration: underline;
}
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
`
const Title2 = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
    font-size: 40px;
`

const Information = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Message</Logo>
            <Description>
                Are you graduating this summer? Make sure to pick up your merch from the Students' Union before you graduate! 
                All of the profits go back into our Union and keep supporting students next year and the year after that.
            </Description> 
        </Left>
        <Center>
            <Title1> Our Socials </Title1>
                <IconsContainer>
                    <SocialContainer>
                    <Instagram/>
                    <a href="https://www.instagram.com/brunelstudents/">
                    brunelstudents
                    </a>
                    </SocialContainer>
                    <SocialContainer>
                    <Facebook/>
                    <a href="https://www.facebook.com/Brunelstudents/">
                    brunelstudents
                    </a>
                    </SocialContainer>
                    <SocialContainer>
                    <Instagram/>
                    <a href="https://www.instagram.com/ubsnightlife/">
                    brunelnightlife
                    </a>
                    </SocialContainer>
                    <SocialContainer>
                    <Twitter/>
                    <a href="https://twitter.com/brunelstudents">
                    brunelstudents
                    </a>
                    </SocialContainer>
                    <SocialContainer>
                    <Facebook/>
                    <a href="https://www.facebook.com/Brunelstudents/">
                    brunelnightlife
                    </a>
                    </SocialContainer>
                    </IconsContainer>
        </Center>
        <Right>
            <Title2> Contact Us </Title2>
            <Information> <LocationOn style = {{marginRight: "10px"}}/> 
                Hamilton Centre, Brunel University, Kingston Lane, Uxbridge, Middlesex. UB8 3PH.
            </Information>
            <Information> <Phone style = {{marginRight: "10px"}}/>
                Tel: 01895 269 269
            </Information>
            <Information> <Phone style = {{marginRight: "10px"}}/>
                Charity Number: 1173492
            </Information>

        </Right>

    </Container>
  )
}

export default Footer