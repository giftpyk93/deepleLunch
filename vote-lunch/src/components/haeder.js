import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../styled'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.orangeNav};
  font-size: 2.5rem;
  padding: 1.2rem;
  font-weight: bold;
`

const Header = props => {
  const { handleLogin } = props
  return <Container>
  <span>{props.title}</span>
  <div>
    {props.user ? <div>{props.user}<div>Logout</div></div> : <div onClick={handleLogin}>Login</div>}
  </div>
  </Container>
}

export default Header