import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Checkbox from './check'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 1rem;
  width: 92%;
  flex-wrap: wrap;
`

const VoteList = props => {
  const { restaurantlist, handleVoteChange, handleAddOption, currentUserVote } = props
  return <Container>
    {
      restaurantlist && restaurantlist.map(data => {
        const checkedVal = _.indexOf(currentUserVote, data)
        return <Checkbox text={data} initCheck={checkedVal !== -1} handleChangeChecked={handleVoteChange} />
      })
    }
    <Checkbox text="Add an option" isAddOption addOptionClick={handleAddOption} />
  </Container>
}

export default VoteList