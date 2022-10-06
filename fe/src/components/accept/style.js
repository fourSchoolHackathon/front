import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(239, 239, 239);
  display: flex;
  align-items: center;
  > div {
    margin-left: 20px;
    font-weight: bold;
  }
`;

export const CallSection = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ff8450;
`;

export const CallComments = styled.div`
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
`;

export const CallBtnWrap = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        color: #ff8450;
        width: 200px;
        height: 80px;
        outline: none;
        border: none;
        border-radius: 15px;
        background-color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const CategoryReqWrapper = styled.div`
  width: 100%;
`;

export const CategoryComments = styled.div`
  width: 100%;
  height: 80px;
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
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0px 20px;
  }
`;

export const Categorys = styled.div`
  margin: 10px 0px 20px 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  margin: 7px;
  color: white;
  background-color: #ff8450;
`;
