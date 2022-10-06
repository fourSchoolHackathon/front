import * as S from './style'
import * as Style from '../Signin/style'
import { useForm } from 'react-hook-form'
import api from '../../common/api'
import { useState } from 'react'
import PostcodePopup from './PostcodePopup'

const categories = [
  '이동보조',
  '말벗',
  '주변정리',
  '식사보조',
  '목욕보조',
  '배변보조',
  '체위변경',
  '투약보조',
  '운동보조'
]

const Signup = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [address, setAddress] = useState('')

  const onSubmit = async form => {
    if (!address) {
      setError('address', { type: 'required', message: '주소는 필수값입니다' })
      return
    }
    if (form.categories.length !== 2) {
      setError('categories', {
        type: 'required',
        message: '2개를 필수로 선택해주세요'
      })
      return
    }
    if (loading) return
    console.log(form)

    try {
      setLoading(true)
      const { data } = await api.post('/user/signup', form)
      setLoading(false)

      localStorage.setItem('access_token', data.access_token)
    } catch (e) {
      alert('회원가입에 실패했습니다')
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <Style.Title>회원가입</Style.Title>
        <Style.LoginWrapper>
          <Style.InputWrapper>
            <Style.Label>실명</Style.Label>
            <Style.Input
              placeholder="실명을 입력해주세요"
              {...register('name', { required: '이름은 필수값입니다' })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <Style.Label style={{ color: 'red' }} role="alert">
                {errors.name?.message}
              </Style.Label>
            )}
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>성별</Style.Label>
            <S.Select {...register('sex', { required: true })}>
              <S.Option value="U">선택안함</S.Option>
              <S.Option value="M">남</S.Option>
              <S.Option value="F">여</S.Option>
            </S.Select>
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>아이디</Style.Label>
            <Style.Input
              placeholder="아이디를 입력해주세요"
              {...register('account_id', {
                required: '아이디는 필수값입니다',
                maxLength: {
                  value: 24,
                  message: '글자 길이는 최대 24자입니다'
                },
                minLength: { value: 6, message: '글자 길이는 최소 6자입니다' }
              })}
              aria-invalid={errors.account_id ? 'true' : 'false'}
            />
            {errors.account_id && (
              <Style.Label style={{ color: 'red' }} role="alert">
                {errors.account_id?.message}
              </Style.Label>
            )}
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>비밀번호</Style.Label>
            <Style.Input
              placeholder="비밀번호를 입력해주세요"
              {...register('password', {
                required: '비밀번호는 필수값입니다',
                maxLength: {
                  value: 24,
                  message: '글자 길이는 최대 24자입니다'
                },
                minLength: { value: 8, message: '글자 길이는 최소 8자입니다' },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/i,
                  message:
                    '비밀번호는 대소문자, 숫자, 특수문자를 포함해야합니다'
                },
                required: '비밀번호는 필수값입니다'
              })}
              aria-invalid={errors.password ? 'true' : 'false'}
              type="password"
            />
            {errors.password && (
              <Style.Label style={{ color: 'red' }} role="alert">
                {errors.password?.message}
              </Style.Label>
            )}
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>주소 검색</Style.Label>
            <S.InputWrapper>
              <Style.Input
                value={address}
                readOnly
                {...register('address')}
                aria-invalid={errors.address ? 'true' : 'false'}
              />
              <S.Button onClick={() => setModal(true)} type="button">
                주소검색
              </S.Button>
            </S.InputWrapper>
            {errors.address && (
              <Style.Label style={{ color: 'red' }} role="alert">
                {errors.address?.message}
              </Style.Label>
            )}
          </Style.InputWrapper>

          <Style.InputWrapper style={{ marginBottom: '2rem' }}>
            <Style.Label>도움을 줄 수 있는 분야</Style.Label>
            <S.CheckBoxWrapper>
              {categories.map((category, i) => (
                <S.CheckBoxBorder key={i} htmlFor={`category${i}`}>
                  <S.CheckBox
                    {...register('categories', {
                      onChange: e => {
                        if (getValues('categories').length > 2)
                          e.target.checked = false
                      }
                    })}
                    type="checkbox"
                    id={`category${i}`}
                    value={category}
                  />
                  {category}
                </S.CheckBoxBorder>
              ))}
            </S.CheckBoxWrapper>
            {errors.categories && (
              <Style.Label style={{ color: 'red' }} role="alert">
                {errors.categories?.message}
              </Style.Label>
            )}
          </Style.InputWrapper>
        </Style.LoginWrapper>

        {modal && (
          <PostcodePopup
            onClose={() => setModal(false)}
            setAddress={setAddress}
          />
        )}

        <Style.LoginBtn>회원가입</Style.LoginBtn>
      </S.Content>
    </S.Wrapper>
  )
}

export default Signup
