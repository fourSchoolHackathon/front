import React, { useEffect } from 'react'
import * as M from './Main.style'

import {useNavigate} from "react-router-dom"

import { useRecoilState } from 'recoil'
import { storedLocation } from '../../stores/location/location'

const Main = () => {
  const [location, setLocation] = useRecoilState(storedLocation)

  const navigate = useNavigate();

  function getLocation() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // console.log(position.coords.latitude + ' ' + position.coords.longitude);
          // 저장 후 리다이렉션
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          navigate("/req")
        },
        function (error) {
          console.error(error)
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity
        }
      )
    } else {
      alert('GPS를 지원하지 않습니다')
    }
  }

  useEffect(() => {
    console.log(location)
  },[location])

  return (
    <M.Wrapper>
      <M.HeaderWrapper>
        <div>해커톤 드가자</div>
      </M.HeaderWrapper>

      <M.SimpleReqWrapper>
        <M.SimpleComments>
          <h3>빠른 도움 요청</h3>
          <p>현재 위치를 기반으로 빠르게 도움을 요청하세요</p>
        </M.SimpleComments>
        <M.ButtonWrapper>
          <button onClick={getLocation}>요청하기</button>
        </M.ButtonWrapper>
      </M.SimpleReqWrapper>

      <M.CategoryReqWrapper>
        <M.CategoryComments>
            <h3>카테고리로 요청</h3>
            <p>카테고리 선택으로 정확하게 도움을 요청하세요</p>
        </M.CategoryComments>
      </M.CategoryReqWrapper>
    </M.Wrapper>
  )
}

export default Main
