import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../styled'
import logoutLogo from '../logout.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.orangeNav};
  font-size: 2.5rem;
  padding: 1.2rem;
  font-weight: bold;
`

const LogoutIcon = styled.div`
  min-width: 2rem;
  height: 2rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${logoutLogo});
  margin-left: 1rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 35%;
`

const Ellipsis = styled.span`
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: normal;
`

const Header = props => {
  const { user, title, handleLogout } = props
  return <Container>
  <span>{title}</span>
  {user && <Info><Ellipsis>{user}</Ellipsis><LogoutIcon onClick={handleLogout} /></Info>}
  </Container>
}

export default Header