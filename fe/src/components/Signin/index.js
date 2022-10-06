import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../common/api'
import * as S from './style'

const Siginin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async form => {
    if (loading) return
    try {
      setLoading(true)
      const { data } = await api.post('/user/signin', form)
      setLoading(false)

      localStorage.setItem('access_token', data.access_token)
    } catch (e) {
      alert('로그인에 실패했습니다')
      setLoading(false)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) navigate('/')
  }, [])

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <S.Title>돌봄</S.Title>
        <S.LoginWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.Input
              {...register('account_id', {
                maxLength: {
                  value: 24,
                  message: '글자 길이는 최대 24자입니다'
                },
                minLength: { value: 6, message: '글자 길이는 최소 6자입니다' },
                required: '아이디는 필수값입니다'
              })}
              placeholder="아이디를 입력해주세요"
              type="text"
              aria-invalid={errors.account_id ? 'true' : 'false'}
            />
            {errors.account_id && (
              <S.Label style={{ color: 'red' }} role="alert">
                {errors.account_id?.message}
              </S.Label>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input
              {...register('password', {
                maxLength: {
                  value: 24,
                  message: '글자 길이는 최대 24자입니다'
                },
                minLength: { value: 8, message: '글자 길이는 최소 8자입니다' },
                required: '비밀번호는 필수값입니다'
              })}
              placeholder="비밀번호를 입력해주세요"
              type="password"
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <S.Label style={{ color: 'red' }} role="alert">
                {errors.password?.message}
              </S.Label>
            )}
          </S.InputWrapper>
        </S.LoginWrapper>

        <S.ButtonWrapper>
          <S.LoginBtn>로그인</S.LoginBtn>
          <Link to="/signup">회원가입</Link>
        </S.ButtonWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Siginin
