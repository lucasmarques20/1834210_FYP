import styled from "styled-components"


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const HeaderContainer = styled.div`
    position: relative;
    padding: 20px;
`

const Header = styled.h1`
    width: 100%;
    padding: 3px;
    display: flex;
    position: relative;
    top: -48vh;
    background-color: #333399;
    color: white;
    font-size: 40px;
    border-radius: 10px;
`

const Title = styled.h1`
    color: #ffea8f;
    padding: 0px;
    border-radius: 10px;
    font-size: 60px;
    margin-bottom: 15px;
    display: flex;
    position: relative;
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, 
    rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px,
     rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, 
     rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, 
     rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
    justify-content: center;
    top: -340px;
`

const Header2 = styled.h1`
    width: 100%;
    padding: 3px;
    display: flex;
    position: relative;
    top: -49vh;
    background-color: #333399;
    color: white;
    font-size: 40px;
    border-radius: 10px;
`

const MerchHeader = () => {
  return (
    <Container>
        <HeaderContainer>
        <Header/>
        <Title> Merch </Title>
        <Header2/>
        </HeaderContainer>
    </Container>
  )
}

export default MerchHeader