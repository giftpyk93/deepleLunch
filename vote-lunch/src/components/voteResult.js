import React from 'react'
import styled from 'styled-components'
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

const VoteResult = () => {
  const commonProperties = {
    width: window.innerWidth - 30,
    height: window.innerWidth - 30,
    margin: { top: 80, right: 80, bottom: 80, left: 80 },
    data: mockData,
    animate: true,
    innerRadius: 0.5,
    padAngle: 2,
    cornerRadius: 3,
  };
  return <Container>
    <Pie
      {...commonProperties}
    />
  </Container>
}

export default VoteResult