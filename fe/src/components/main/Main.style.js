import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`

export const HeaderWrapper = styled.div`
    width:100%;
    height:60px;
    border-bottom: 1px solid rgb(239, 239, 239);
    display:flex;
    align-items:center;
    > div{
        margin-left:20px;
        font-weight:bold;
    }
`

export const SimpleReqWrapper = styled.div`
    width:100%;
    height:300px;
    background-color:#ff8450;
    

`

export const SimpleComments = styled.div`
    width:100%;
    height:100px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    *{
        margin-left:20px;
        color:white;
    }
    >h3{
        margin-bottom:0px;
    }
    >p{
        margin-top:6px;
        font-size:13px;
    }
`

export const ButtonWrapper = styled.div`
    width:100%;
    height:160px;
    display:flex;
    justify-content:center;    
    align-items:center;
    >button{
        color:#ff8450;
        width:200px;
        height:80px;
        outline:none;
        border:none;
        border-radius:15px;
        background-color:white;
        font-size:20px;
        font-weight:bold;
    }
`

export const CategoryReqWrapper = styled.div`
    width:100%;
`
export const CategoryComments = styled.div`
    width:100%;
    height:100px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    *{
        margin-left:20px;
        color:black
    }
    >h3{
        margin-bottom:0px;
    }
    >p{
        font-size:13px;
        margin-top:6px;
    }
`

