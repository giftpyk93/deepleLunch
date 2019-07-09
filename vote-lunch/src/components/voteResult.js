import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Pie } from '@nivo/pie'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const mockData = [
  {
    id: 'KFC',
    value: 3
  },
  {
    id: 'Mc',
    value: 1
  },
  {
    id: 'Pizza',
    value: 10
  }
]

const VoteResult = props => {
  const { allVote } = props

  const commonProperties = {
    width: window.innerWidth - 30,
    height: window.innerWidth - 30,
    margin: { top: 80, right: 80, bottom: 80, left: 80 },
    animate: true,
    innerRadius: 0.5,
    padAngle: 2,
    cornerRadius: 3,
  };

  const votes = allVote && allVote.map(data => data.votes)
  const pieData = {}
  if (votes) {
    _.flatten(votes).forEach(v => {
      pieData[v] = pieData[v] ? pieData[v] + 1 : 1
    })

    const computePieData = Object.keys(pieData).map(key => ({ id: key, value: pieData[key] }))
    commonProperties.data = computePieData
  }
  
  return <Container>
    {votes && <Pie
      {...commonProperties}
    />}
  </Container>
}

export default VoteResult