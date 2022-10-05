import * as S from './style'
import * as Style from '../Signin/style'
import { useForm } from 'react-hook-form'

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
  const { register, getValues } = useForm()
  return (
    <S.Wrapper>
      <S.Content>
        <Style.Title>케어닥</Style.Title>
        <Style.LoginWrapper>
          <Style.InputWrapper>
            <Style.Label>실명</Style.Label>
            <Style.Input />
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>성별</Style.Label>
            <S.Select>
              <S.Option value="M">남</S.Option>
              <S.Option value="F">여</S.Option>
            </S.Select>
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>아이디</Style.Label>
            <Style.Input />
          </Style.InputWrapper>

          <Style.InputWrapper>
            <Style.Label>비밀번호</Style.Label>
            <Style.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </Style.InputWrapper>

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
                  value={i + 1}
                />
                {category}
              </S.CheckBoxBorder>
            ))}
          </S.CheckBoxWrapper>
        </Style.LoginWrapper>
        <Style.LoginBtn>로그인</Style.LoginBtn>
      </S.Content>
    </S.Wrapper>
  )
}

export default Signup
