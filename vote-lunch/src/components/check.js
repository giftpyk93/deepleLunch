import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 43%;
  padding: 1rem;
`

const Checkbox = styled.input`
  width: 2rem;
  height: 2rem;
  margin-right: 1.2rem;
`

const Label = styled.span`
  display: flex;
  flex: 1;
  font-size: 1.7rem;
  ${props => props.fade && `
    color: #CCC;
  `}
`

const Check = props => {
  const { text, handleChangeChecked, initCheck, isAddOption, addOptionClick } = props
  const [checkedValue, setCheckedValue] = useState(initCheck)
  const onClickChecked = () => {
    handleChangeChecked(text)
    setCheckedValue(!checkedValue)
  }

  return <Container onClick={() => isAddOption && addOptionClick()}>
    <Checkbox type="checkbox" checked={!isAddOption && checkedValue} onClick={onClickChecked} disabled={isAddOption} />
    <Label fade={isAddOption}>{text}</Label>
  </Container>
}

export default Check