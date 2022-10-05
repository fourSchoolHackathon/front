import React, { useEffect, useState } from 'react'
import * as M from './Main.style'

import { useNavigate } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { storedLocation } from '../../stores/location/location'

const Main = () => {
  const [location, setLocation] = useRecoilState(storedLocation)

  const navigate = useNavigate()

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
          navigate('/req')
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

  //   useEffect(() => {
  //     console.log(location)
  //   }, [location])

  // -------

  const [gender, setGender] = useState('')
  const [selected, setSelected] = useState([])
  const [time, setTime] = useState(new Date().toISOString().slice(0, -6))
  //   const [time,setTime] = useState(new Date().toISOString().slice(0,-14))

  const service = [
    '이동보조',
    '말벗',
    '주변정리',
    '식사보조',
    '목욕보조',
    '배변보조',
    '체위변경',
    '투약보조',
    '운동보조',
    '기타'
  ]

  /**인자값으로 들어온 서비스가 이미 선택된 것이라면 true */
  function findService(service) {
    return selected.includes(service)
  }
  function handleService(service) {
    // 이미 있었다면 취소
    if (findService(service)) {
      setSelected(prev => prev.filter(e => e !== service))
    } else {
      // 없으니 추가
      setSelected(prev => [...prev, service])
    }
  }
  function dateHandler(e) {}

  useEffect(() => {
    console.log(selected)
  }, [selected])

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

        <M.CategoryWrapper>
          <M.GenderCategory>
            <h3>성별</h3>
            <M.InputWrapper>
              <M.LeftInput
                type="radio"
                id="select"
                name="gender"
                onClick={() => setGender('남자')}
              />
              <label htmlFor="select">남성</label>
              <M.RightInput
                type="radio"
                id="select2"
                name="gender"
                onClick={() => setGender('여성')}
              />
              <label htmlFor="select2">여성</label>
            </M.InputWrapper>
          </M.GenderCategory>

          <h3>서비스</h3>
          <M.Categorys>
            {service.map(i => (
              <M.Category
                onClick={() => handleService(i)}
                isExist={findService(i)}
                key={i}
              >
                {i}
              </M.Category>
            ))}
          </M.Categorys>

          <h3>시간</h3>
          <M.DateWrapper>
            <M.DateInputWrapper>
              <M.InputsWrapper>
                <M.SplitInput>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().slice(0, -14)}
                  />
                </M.SplitInput>
                <M.SplitInput>
                  <input type="time" />
                </M.SplitInput>
              </M.InputsWrapper>

              {/* <input type="date" defaultValue={new Date().toISOString().slice(0,-14)} onChange={(e) => dateHandler(e,)} /> */}

              {/* <input
                type="date"
                defaultValue={time}
                onChange={e => dateHandler(e)}
              /> */}
            </M.DateInputWrapper>
          </M.DateWrapper>
        </M.CategoryWrapper>
      </M.CategoryReqWrapper>
      <M.Temp />
    </M.Wrapper>
  )
}

export default Main
