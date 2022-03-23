import styled from 'styled-components'
import NavigationBar from '../components/NavigationBar'
import Questions from '../components/Questions'

const Container = styled.div `
`

const Container2 = styled.div`
    background-color: #385072;
    margin-top: 50px;
`

const SignUpContainer = styled.div`
border: none;
align-items: center;
padding: 150px;
text-align: center;
`;

const Input = styled.input`
border: none;
border-radius: 5px;
outline: none;
height: 4vh;
margin-top: 10px;
margin-left: 35%;
display: flex;
flex-direction: column;
width: 30%;
`;

const Title = styled.h1`
font-size: 40px;
font-weight: 500;
margin-bottom: 40px;
color: white;
`

const Button = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;

    &:hover{
      background-color: #e5effd;
      transform: scale(1.1);
    }
    
    transition: all 0.2s ease;
`

const SignUp = () => {

  
  return (
        <Container>
          <NavigationBar/>
            <Container2>
              <SignUpContainer>
                <Title> SIGN UP </Title>
                  <Input placeholder='First Name'/>
                  <Input placeholder='Last Name'/>
                  <Input placeholder='Email' type="email"/>
                  <Input placeholder='Password' type="password"/>
                  <Input placeholder='Confirm Password' type="password"/>
                  <Button> SUBMIT </Button>
              </SignUpContainer>
              </Container2>
          <Questions/>
        </Container>
  )
}

export default SignUp