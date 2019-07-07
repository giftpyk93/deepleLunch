import React, { useState, useEffect } from 'react'
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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Btn = styled.div`
  height: 2.2rem;
  padding: 0.5rem;
  margin: 1rem;
  width: 35%;
  font-size: 1.5rem;
  background-color: blueviolet;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.disabled && `
    cursor: not-allowed;
    color: #ccc;
  `}
`

const MainLayout = () => {
  const initData = () => {
    const user = localStorage.getItem(USER_KEY)
    let restaurants = localStorage.getItem(RESTRUANT_LIST_KEY)
    restaurants = restaurants && JSON.parse(restaurants)
    let votes = localStorage.getItem(ALL_VOTE_KEY)
    votes = votes && JSON.parse(votes)

    const getVoteFromCrrUser = votes && _.find(votes, vote => vote.user === user)
    const currUsrVote = getVoteFromCrrUser ? getVoteFromCrrUser.votes : []
  
    setcrrUser(user)
    setRestaurantList(restaurants)
    setAllVote(votes)
    setCrrUserVote(currUsrVote)
    setAlreadyVote(!_.isEqual(currUsrVote, []))
  }

  useEffect(() => {
    initData()
  }, []);
  
  const [isOpenOptionModal, setOpenOptionModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentUser, setcrrUser] = useState(undefined)
  const [restaurantList, setRestaurantList] = useState([])
  const [allVote, setAllVote] = useState([])
  const [currentUserVote, setCrrUserVote] = useState([])
  const [alreadyVote, setAlreadyVote] = useState(false)
  
  const handleSelectedChoice = selected => {
    const selectedChoice = _.xor(currentUserVote, [selected])
    setCrrUserVote(selectedChoice)
  }


  return <div>
    <Header
      title="deeple lunch"
      user={currentUser}
      handleLogout={() => {
        localStorage.removeItem(USER_KEY)
        setCrrUserVote([])
        setcrrUser(undefined)
      }}
    />
    { currentUser
      ? <Container>
        {
          showResult ? <Result /> : <VoteList restaurantlist={restaurantList} currentUserVote={currentUserVote} handleAddOption={() => setOpenOptionModal(true)} handleVoteChange={handleSelectedChoice} />
        }
        {
          showResult
          ? <BtnContainer>
              <Btn onClick={() => setShowResult(!showResult)}>Back To Vote</Btn>
            </BtnContainer>
          : <BtnContainer>
              <Btn disabled={_.isEqual(currentUserVote, [])} onClick={() => {
                  if (_.isEqual(currentUserVote, [])) return

                  const computeUserVotes = {
                    user: currentUser,
                    votes: currentUserVote
                  }
                  
                  const newAllvotes = allVote
                  _.remove(newAllvotes, vote => vote.user === currentUser)
                  newAllvotes.push(computeUserVotes)

                  const votesData = JSON.stringify(newAllvotes)

                  localStorage.setItem(ALL_VOTE_KEY, votesData)

                  setAllVote(newAllvotes)
                  setAlreadyVote(true)
                }}
              >Vote</Btn>
              <Btn disabled={!alreadyVote} onClick={() => {
                if (!alreadyVote) return
                setShowResult(!showResult)
              }}>Show Result</Btn>
            </BtnContainer>
        }
      </Container>
      : <Login handleLogin={(name) => {
          localStorage.setItem(USER_KEY, name)

          initData()
        }} />
    }
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