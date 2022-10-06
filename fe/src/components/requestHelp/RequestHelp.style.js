import styled from "styled-components";

export const Wrapper = styled.div`
    /* width:100 */
    width:100%;
    height:calc(100vh - 70px);
    position:relative;
`

export const MoreInfo = styled.div`
    position:absolute;
    right:20px;
    bottom:50px;
    width:70%;
    height:100px;
    z-index:1;
    background-color:white;
    border-radius:15px;
`

export const MiniModal = styled.div`
    position:absolute;
    left:0px;
    top:0px;
    z-index:2;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display:Flex;
    justify-content:center;
    align-items:Center;
`
export const LoginWrapper = styled.div`
    width:70%;
    height:30%;
    border-radius:15px;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const GetPhoneWrapper = styled.div`
    width:75%;
    display:Flex;
    justify-content:space-between;

`

export const LoginInput = styled.input`
    width:50%;
    height:30px;
    border:none;
    border-bottom:solid 2px #ff8450;
    :focus{
        outline:none;
    }
    ::placeholder{
        font-weight:bold;
    }
`
export const LoginButon = styled.button`
    width:60px;
`
