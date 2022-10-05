import React from 'react'
import * as S from './style'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>케어닥</S.Title>
        <S.LoginWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.Input placeholder="아이디를 입력해주세요" type="text" />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input placeholder="비밀번호를 입력해주세요" type="password" />
          </S.InputWrapper>
        </S.LoginWrapper>

        <S.LoginBtn>로그인</S.LoginBtn>
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
