import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import Header from './haeder'
import Login from './login'
import VoteList from './voteList'
import Result from './voteResult'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const MainLayout = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  return <div>
    <Header title="deeple lunch" />
    <Container>
      list
      <div onClick={() => setOpenModal(true)}>onpen modal</div>
      <div onClick={() => setShowResult(!showResult)}>triggre show result</div>
      {
        showResult ? <Result /> : <VoteList />
      }      
    </Container>
    <Modal
      isOpen={isOpenModal}
    >
      <Login />
    </Modal>
  </div>
}

export default MainLayout