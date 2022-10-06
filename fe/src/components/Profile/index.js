import { useCallback, useEffect, useState } from 'react'
import userCircle from '../../static/profile/user-circle.svg'
import * as S from './style'
import api from '../../common/api'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const calcDate = useCallback(
    date => `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`
  )

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/signin')
    ;(async () => {
      const { data } = await api.get('/user/history')
      setData(data)
    })()
  }, [])

  return (
    <S.Wrapper>
      <S.UserInfo>
        <S.UserImg src={userCircle} />
        <S.UserName>{data?.name}</S.UserName>
      </S.UserInfo>
      <S.ActiveWrapper>
        <h3>활동 내역</h3>
        <S.Actives>
          {data?.application_list.map((i, idx) => (
            <S.Active key={idx}>
              <div>
                <S.ActiveDate>{calcDate(new Date(i.called_at))}</S.ActiveDate>
                <S.Badges>
                  <S.Badge>이동보조</S.Badge>
                  <S.Badge>말벗</S.Badge>
                </S.Badges>
              </div>
            </S.Active>
          ))}
        </S.Actives>
      </S.ActiveWrapper>
    </S.Wrapper>
  )
}

export default Profile
