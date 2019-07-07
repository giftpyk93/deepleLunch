import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`

const InputField = styled.input`
  font-size: 1.5rem;
  line-height: 2.2rem;
  padding: 0.5rem;
  width: 90%;
  margin: 1.5rem 0;
  border: solid 2px blueviolet;
  border-radius: 5px;
`

const Btn = styled.div`
  height: 2.2rem;
  padding: 0.5rem;
  width: 90%;
  font-size: 1.5rem;
  background-color: blueviolet;
  border: solid 2px blueviolet;
  color: #fff;
  border-radius: 5px;
  text-align: center;
`

const Text = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`

const AddOption = props => {
  const { handleAddOption } = props
  const [option, setOption] = useState(undefined)
  return <Container>
    <Text>Add Option</Text>
    <InputField placeholder='Enter Option' onChange={e => setOption(e.target.value)} />
    <Btn onClick={() => handleAddOption(option)}>ADD</Btn>
  </Container>
}

export default AddOption