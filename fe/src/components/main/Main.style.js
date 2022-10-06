import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(239, 239, 239);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;

  a {
    color: #000;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export const SimpleReqWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ff8450;
`

export const SimpleComments = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  * {
    margin-left: 20px;
    color: white;
  }
  > h3 {
    margin-bottom: 0px;
  }
  > p {
    margin-top: 6px;
    font-size: 13px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    color: #ff8450;
    width: 200px;
    height: 80px;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: white;
    font-size: 20px;
    font-weight: bold;
  }
`

export const CategoryReqWrapper = styled.div`
  width: 100%;
`
export const CategoryComments = styled.div`
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  * {
    margin-left: 20px;
    color: black;
  }
  > h3 {
    margin-bottom: 0px;
  }
  > p {
    font-size: 13px;
    margin-top: 6px;
  }
`

export const CategoryWrapper = styled.div`
  width: 100%;
  /* height: 300px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0px 20px;
  }
`

export const GenderCategory = styled.div`
  width: 100%;
`
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`

const Input = styled.input`
  display: none;
  + label {
    cursor: pointer;
    /* height: 100%; */
    height: 40px;
    width: 30%;
    font-size: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.9px solid #ff8450;
    background-color: #fff;
    color: #ff8450;
  }
  :checked + label {
    background-color: #ff8450;
    color: #fff;
  }
`

export const LeftInput = styled(Input)`
  + label {
    border-radius: 7px 0px 0px 7px;
  }
`
export const RightInput = styled(Input)`
  + label {
    border-radius: 0px 7px 7px 0px;
  }
`

export const Categorys = styled.div`
  margin: 10px 0px 20px 20px;
  display: flex;
  flex-wrap: wrap;
`
export const Category = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  margin: 7px;
  color: ${props => (props.isExist ? 'white' : 'black')};
  background-color: ${props => (props.isExist ? '#ff8450' : 'white')};
`

export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const DateInputWrapper = styled.div`
  width: 100%;
`

export const InputsWrapper = styled.div`
  margin: 10px 50px 10px 50px;
  display: flex;
  justify-content: space-between;
  /* justify-content: space-evenly; */
`
export const SplitInput = styled.div`
  display: Flex;
  flex-direction: column;
  > h4 {
    margin: 8px 0px;
  }
  > input {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    padding: 8px;
    border: 1px #b6b3b3 solid;
    /* font-size:15px; */
    /* border:none; */
  }
`

export const CategoryButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 40px 0px;
  > button {
    background-color: #ff8450;
    color: white;
    width: 200px;
    height: 80px;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;

    margin: 50px 0px 30px 0px;
  }
`

export const Temp = styled.div`
  width: 100%;
  height: 70px;
`
