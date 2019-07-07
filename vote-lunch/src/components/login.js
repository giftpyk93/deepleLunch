import React, {useState} from 'react'
import styled from 'styled-components'
import deepleImg from '../deeple.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`

const Logo = styled.div`
  height: 5rem;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${deepleImg});
  margin: 1.5rem 0;
`

const InputField = styled.input`
  font-size: 1.5rem;
  line-height: 2.2rem;
  padding: 0.5rem;
  width: 90%;
  margin: 1.5rem 0;
  border: solid 2px blueviolet;
  border-radius: 5px;
`

const Btn = styled.div`
  height: 2.2rem;
  padding: 0.5rem;
  width: 90%;
  font-size: 1.5rem;
  background-color: blueviolet;
  border: solid 2px blueviolet;
  color: #fff;
  border-radius: 5px;
  text-align: center;
`

const Login = props => {
  const { handleLogin } = props
  const [name, setName] = useState(undefined)
  return <Container>
    <Logo />
    <InputField placeholder='Enter Your Name' onChange={e => setName(e.target.value)} />
    <Btn onClick={() => handleLogin(name)}>LOGIN</Btn>
  </Container>
}

export default Login