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
  const { handleLogin, user, title, handleLogout } = props
  return <Container>
  <span>{title}</span>
  <div>
    {user ? <div>{user}<div onClick={handleLogout}>Logout</div></div> : <div onClick={handleLogin}>Login</div>}
  </div>
  </Container>
}

export default Header