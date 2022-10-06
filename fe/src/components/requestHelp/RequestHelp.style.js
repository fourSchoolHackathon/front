import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  /* width:100 */
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
`

export const MoreInfo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 50px;
  width: 70%;
  padding: 20px;
  z-index: 1;
  background-color: white;
  border-radius: 20px 20px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: Center;
`

export const MiniModal = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: Flex;
  justify-content: center;
  align-items: Center;
`
export const LoginWrapper = styled.div`
  width: 70%;
  height: 30%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GetPhoneWrapper = styled.div`
  width: 75%;
  display: Flex;
  justify-content: space-between;
  margin: 10px 0px;
`

export const LoginInput = styled.input`
  width: 50%;
  height: 30px;
  border: none;
  border-bottom: solid 2px #ff8450;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-weight: bold;
  }
`
export const LoginButton = styled.button`
  width: 80px;
  border-radius: 10px;
  border: 1px solid;
  background-color: #ff8450;
  font-weight: bold;
  color: white;
  :focus {
    outline: none;
  }
`

// --------

const myAni = keyframes`
0% {
    transform:rotate(0deg);
}
100%{
    transform:rotate(180deg);
}
`

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  > p {
    margin: 0px;
    font-size: 13px;
  }
`

export const LoadBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: Center;
  align-items: center;
  > h3 {
    margin: 0px;
  }
  > img {
    height: 35px;
    margin-left: 15px;
    animation: ${myAni} 1s infinite;
  }
`

export const AlertWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h3 {
    margin: 0px;
  }
  > div {
    > span {
      margin: 0px;
      margin-top: 7px;
      font-size: 13px;
    }
    >span:nth-child(2){
        color:#ff8450;
        font-weight:bold;
        font-size:17px;
    }
  }
`
