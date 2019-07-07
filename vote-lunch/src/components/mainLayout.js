import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './haeder'
import Modal from './modal'
import Login from './login'
import VoteList from './voteList'
import Result from './voteResult'

const USER_KEY = 'DEEPLE_USER'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const mocklist = [
  {checked: true, text: 'ข้าวมันไก่'},
  {checked: false, text: 'ข้าวมันไก่'}
]

const MainLayout = () => {
  const [isOpenLoginModal, setOpenLoginModal] = useState(false)
  const [isOpenOptionModal, setOpenOptionModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentUser, setcrrUser] = useState(localStorage.getItem(USER_KEY))
  return <div>
    <Header
      title="deeple lunch"
      user={currentUser}
      handleLogout={() => {
        localStorage.setItem(USER_KEY, undefined)
        setcrrUser(undefined)
      }}
      handleLogin={() => setOpenLoginModal(true)}
    />
    <Container>
      {
        showResult ? <Result /> : <VoteList list={mocklist} handleAddOption={() => setOpenOptionModal(true)} handleVoteChange={() => {}} />
      }      
      <div onClick={() => setShowResult(!showResult)}>triggre show result</div>
    </Container>
    <Modal
      isOpen={isOpenLoginModal}
      handleCloseModal={() => setOpenLoginModal(false)}
    >
      <Login handleLogin={(name) => {
        localStorage.setItem(USER_KEY, name)
        setcrrUser(name)
        setOpenLoginModal(false)
      }} />
    </Modal>
    <Modal
      isOpen={isOpenOptionModal}
      handleCloseModal={() => setOpenOptionModal(false)}
    >
      add option
    </Modal>
  </div>
}

export default MainLayout