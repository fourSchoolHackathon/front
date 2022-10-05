import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  height: 70px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(239, 239, 239);
`
export const Item = styled.div`
  width: 50%;

  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration:none;
  }
  img {
    width: 30px;
    * {
      fill: 'black';
    }
  }
  div {
    font-size: 13px;
    /* color:#B6B3B3; */
    color: ${props => (props.isFull ? '#ff8450' : '#B6B3B3')};
  }
`
// rgb(182, 179, 179)
