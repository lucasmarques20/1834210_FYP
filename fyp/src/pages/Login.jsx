import styled from 'styled-components'
import Questions from '../components/Questions'
import NavigationBar from '../components/NavigationBar'
import axios from 'axios'
import { useState } from 'react';

const Container = styled.div `
`
const Container2 = styled.div`
    background-color: #385072;
    margin-top: 50px;
`

const LoginContainer = styled.div`
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

const Help = styled.h1`
font-size: 14px;
font-weight: 500;
margin-top: 10px;
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

const Login = () => { 
  
  // Could not get the information to be sent to the mongoDB server, 
  //but users can be fecthed and created using Postman, the app I relied on to test the API.

  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.get ("http://localhost:5000/api/login", {email, password})
      setUser(res.data)

    } catch (err) {
      console.log(err)
    }
  }
    return (
          <Container>
              <NavigationBar/>
              <Container2>
                  <LoginContainer>
                    <form onSubmit={handleSubmit}>
                      <Title> LOGIN </Title>
                    <Input type="email" placeholder='Email' onChange={(event) => setEmail (event.target.value)} required/>
                    <Input type="password" placeholder='Password' onChange={(event) => setPassword (event.target.value)} required/>
                    <Help> NEED HELP? PLEASE CONTACT OUR SUPPORT BELOW </Help>
                    <Button type = "submit" className='submitButton'> SUBMIT </Button>
                    </form>
                  </LoginContainer>
                </Container2>
            <Questions/>
            
          </Container>
    )
  }
  
  export default Login