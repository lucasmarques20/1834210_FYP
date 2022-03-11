import styled from "styled-components"

const Container = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffea8f;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 15px;
`

const Description = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 400;
`

const Email = styled.a`
    font-size: 20px;
    font-weight: 400;
`

const Questions = () => {
  return (
    <Container>
        <Title> Support </Title>
        <Description> Got any questions regarding our shop? Please contact: </Description>
        <Email> Union.Reception@brunel.ac.uk</Email>
    </Container>
  )
}

export default Questions