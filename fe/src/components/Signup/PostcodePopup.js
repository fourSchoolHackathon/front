import React from 'react'
import ReactDOM from 'react-dom'
import DaumPostcodeEmbed from 'react-daum-postcode'
import styled from 'styled-components'

const ModalPortal = ({ children }) => {
  const el = document.getElementById('portal-root')
  return ReactDOM.createPortal(children, el)
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
  width: 90%;
  max-width: 35rem;
`

const PostcodePopup = ({ onClose, setAddress }) => {
  const handleComplete = data => {
    setAddress(data.address)
    onClose()
  }

  return (
    <ModalPortal>
      <Wrapper onClick={onClose}>
        <Content>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Content>
      </Wrapper>
    </ModalPortal>
  )
}

export default PostcodePopup
