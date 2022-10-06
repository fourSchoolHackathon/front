import userCircle from '../../static/profile/user-circle.svg'
import * as S from './style'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.UserInfo>
        <S.UserImg src={userCircle} />
        <S.UserName>변찬우</S.UserName>
      </S.UserInfo>
      <S.ActiveWrapper>
        <h3>활동 내역</h3>
        <S.Actives>
          <S.Active>
            <S.ActiveTitle>나 집에 갈래</S.ActiveTitle>
            <S.ActiveDate>2022 / 10 / 06</S.ActiveDate>
            <S.ActiveAddress>
              전라남도 강진군 마량면 청자로 2320
            </S.ActiveAddress>
          </S.Active>
          <S.Active />
          <S.Active />
          <S.Active />
          <S.Active />
        </S.Actives>
      </S.ActiveWrapper>
    </S.Wrapper>
  )
}

export default Profile
