import QueryString from 'qs'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../common/api'
import * as S from './style'

interface Info {
  category: string[];
  phoneNumber: string;
}

const Main = () => {
  const location = useLocation()
  const phoneNumber = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  }).phoneNumber
  const [info, setInfo] = useState < Info > null

  useEffect(() => {
    ;(async () => {
      if (typeof phoneNumber !== 'string') return
      // 더미 데이터
      setInfo({
        category: ['이동보조', '말벗', '주변정리', '식사보조'],
        phoneNumber: '01012345678'
      })

      // 서버에서 정보 가져오는 코드
      // setInfo(await (await api.get<Info>(`info?phone_number=${phoneNumber}`)).data);
    })()
  }, [phoneNumber])

  return (
    info && (
      <S.Wrapper>
        <S.HeaderWrapper>
          <div>상세한 도움 주기</div>
        </S.HeaderWrapper>
        <S.CallSection>
          <S.CallComments>
            <h3>도움 주기</h3>
            <p>전화를 걸어 도와주세요</p>
          </S.CallComments>
          <S.CallBtnWrap>
            <a href={`tel:${info.phoneNumber}`}>
              <button>전화 걸기</button>
            </a>
          </S.CallBtnWrap>
        </S.CallSection>
        <S.CategoryReqWrapper>
          <S.CategoryComments>
            <h3>도움이 필요한 목록</h3>
            <p>아래의 서비스들을 요청하고있어요</p>
          </S.CategoryComments>
          <S.CategoryWrapper>
            <S.Categorys>
              {info.category.map(category => (
                <S.Category key={category}>{category}</S.Category>
              ))}
            </S.Categorys>
          </S.CategoryWrapper>
        </S.CategoryReqWrapper>
      </S.Wrapper>
    )
  )
}

export default Main
