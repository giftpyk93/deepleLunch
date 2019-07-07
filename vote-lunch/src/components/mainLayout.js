import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Header from './haeder'
import Modal from './modal'
import Login from './login'
import AddOption from './addOption'
import VoteList from './voteList'
import Result from './voteResult'

const USER_KEY = 'DEEPLE_USER'
const RESTRUANT_LIST_KEY = 'RESTRUANT_LIST'
const ALL_VOTE_KEY = 'ALL_VOTE'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const mocklist = [
  {checked: true, text: 'ข้าวมันไก่'},
  {checked: false, text: 'ข้าวมันไก่'}
]

const getLocalStorage = () => {
  const user = localStorage.getItem(USER_KEY)
  let restaurants = localStorage.getItem(RESTRUANT_LIST_KEY)
  restaurants = restaurants && JSON.parse(restaurants)

  let votes = localStorage.getItem(ALL_VOTE_KEY)
  votes = votes && JSON.parse(votes)

  return {
    user,
    restaurants,
    votes
  }
}

const MainLayout = () => {
  const initData = getLocalStorage()

  const [isOpenLoginModal, setOpenLoginModal] = useState(false)
  const [isOpenOptionModal, setOpenOptionModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentUser, setcrrUser] = useState(initData.user)
  const [restaurantList, setRestaurantList] = useState(initData.restaurants)
  const [allVote, setAllVote] = useState(initData.votes)
  const getVoteFromCrrUser = allVote && _.find(allVote, vote => vote.user === currentUser)

  const [currentUserVote, setCrrUserVote] = useState(getVoteFromCrrUser ? getVoteFromCrrUser.vote : [])
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
        showResult ? <Result /> : <VoteList restaurantlist={restaurantList} currentUserVote={currentUserVote} handleAddOption={() => setOpenOptionModal(true)} handleVoteChange={() => {}} />
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
      <AddOption handleAddOption={option => {
        const crrList = restaurantList || []
        crrList.push(option)
        const computeList = JSON.stringify(crrList)

        localStorage.setItem(RESTRUANT_LIST_KEY, computeList)
        setRestaurantList(crrList)
        setOpenOptionModal(false)
      }} />
    </Modal>
  </div>
}

export default MainLayout