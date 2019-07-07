import React from 'react'
import styled from 'styled-components'

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
  const { list, handleVoteChange, handleAddOption } = props
  return <Container>
    {list && list.map(data => <Checkbox text={data.text} initCheck={data.checked} handleChangeChecked={handleVoteChange} />)}
    <Checkbox text="Add an option" isAddOption addOptionClick={handleAddOption} />
  </Container>
}

export default VoteList