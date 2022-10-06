import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
`

export const UserInfo = styled.div`
  margin-bottom: 2rem;
`

export const UserImg = styled.img`
  width: 10rem;
  height: 10rem;
`

export const UserName = styled.h2`
  text-align: center;
  margin: 0;
`

export const ActiveWrapper = styled.div`
  width: 85%;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Actives = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Active = styled.li`
  position: relative;
  min-height: 8rem;
  max-width: 30rem;
  width: 50%;
  box-shadow: 0 0 10px rgba(235, 64, 52, 0.3);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    top: 50%;
    transform: translateY(-50%);
    left: -20%;
    position: absolute;
    content: '';
    width: 1rem;
    height: 1rem;
    background: #ff8450;
    border-radius: 100%;
  }

  &::before {
    position: absolute;
    top: 0;
    content: '';
    left: -20%;
    width: 4px;
    height: 120%;
    background: #e4e4e4;
    transform: translateX(0.35rem);
  }
`

export const Badges = styled.div`
  margin-top: 1rem;
`

export const Badge = styled.span`
  border-radius: 1rem;
  border: 2px solid #f7a583;
  display: inline;
  padding: 0.2rem 0.5rem;
  font-weight: bold;
  color: #aaa;
  margin-right: 0.5rem;
`

export const ActiveDate = styled.h3`
  margin: 0;
`

export const ActiveAddress = styled.p`
  margin-bottom: 0;
`
