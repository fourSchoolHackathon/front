import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
`

export const Content = styled.form`
  max-width: 30rem;
  width: 90%;
  max-height: 30rem;
  height: 80%;
  border-radius: 0.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 1rem 0;
`

export const Title = styled.h1`
  margin: 0;
`

export const LoginWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.div`
  max-width: 20rem;
  width: 90%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  max-width: 20rem;
  width: 90%;
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: 0.7rem;
  border: 1px solid #e4e4e4;
  padding: 0 0.7rem;
  font-size: 1rem;
  outline-color: #ff8450;

  ::placeholder {
    color: #e1e1e1;
  }
`

export const LoginBtn = styled.button`
  font-size: 1.5rem;
  border: none;
  background: #ff8450;
  color: #fff;
  padding: 0.5rem 20%;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`
