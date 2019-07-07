import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const Container = styled.div`
  position: relative;
`

const CloseIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0;
  :before {
    content: 'x';
    color: #000;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 1px;
  }
`

const MyModal = props => {
  const { isOpen, handleCloseModal, children } = props
  
  return <Modal isOpen={isOpen}>
    <Container>
      <CloseIcon onClick={handleCloseModal} />
      {children}
    </Container>
  </Modal>
}

export default MyModal