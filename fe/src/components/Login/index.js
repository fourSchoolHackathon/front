import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './style'

const Main = () => {
  const [error, setError] = useState()
  const { register, handleSubmit } = useForm()

  const onSubmit = form => {
    console.log(form)
  }

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <S.Title>케어닥</S.Title>
        <S.LoginWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.Input
              {...register('account_id', {
                maxLength: 24,
                minLength: 6,
                required: true
              })}
              placeholder="아이디를 입력해주세요"
              type="text"
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input
              {...register('password', {
                maxLength: 24,
                minLength: 8,
                required: true
              })}
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </S.InputWrapper>
        </S.LoginWrapper>

        <S.Label>{}</S.Label>

        <S.LoginBtn>로그인</S.LoginBtn>
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
