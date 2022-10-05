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

  function simpleReques(){
    
  }
  function categoryRequest(){

  }

  //   useEffect(() => {
  //     console.log(location)
  //   }, [location])

  // -------

  const now = new Date();
  const [gender, setGender] = useState('')
  const [selected, setSelected] = useState([])
  const [time, setTime] = useState(`${now.getFullYear()}-${`${now.getMonth()}`.padStart(2,"0")}-${`${now.getDate()}`.padStart(2,"0")}T${`${now.getHours()}`.padStart(2,"0")}:${`${now.getMinutes()}`.padStart(2,"0")}T${now.getFullYear()}-${`${now.getMonth()}`.padStart(2,"0")}-${`${now.getDate()}`.padStart(2,"0")}T${`${now.getHours()+2}`.padStart(2,"0")}:${`${now.getMinutes()}`.padStart(2,"0")}`)

  useEffect(() => {
    console.log(time)
  },[time])

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
  /** index는 T를 기준으로 나누었을 때의 배열index이다 */
  function timeHandler(index,value) {
    // setTime((prev) => prev.split("T")[index])

    const temp = time.split("T")
    temp[index] = value
    setTime(temp.join(''))
  }

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
              <M.InputsWrapper>
                <M.SplitInput>
                  <h4>시작일</h4>
                  <input
                    type="date"
                    defaultValue={time.split("T")[0]}
                    onChange={(e) => timeHandler(0,e.target.value)}
                    />
                </M.SplitInput>
                <M.SplitInput>
                  <h4>종료일</h4>
                  <input
                    type="date"
                    defaultValue={time.split("T")[0]}
                    onChange={(e) => timeHandler(2,e.target.value)}
                    />
                </M.SplitInput>
              </M.InputsWrapper>
              <M.InputsWrapper>
                <M.SplitInput>
                <h4>시작 시간</h4>
                <input 
                type="time" 
                defaultValue={time.split("T")[1]} 
                onChange={(e) => timeHandler(1,e.target.value)} />
                </M.SplitInput>
                <M.SplitInput>
                <h4>종료 시간</h4>
                <input 
                type="time" 
                defaultValue={time.split("T")[3]} 
                onChange={(e) => timeHandler(3,e.target.value)} />
                </M.SplitInput>
              </M.InputsWrapper>
          </M.DateWrapper>
        </M.CategoryWrapper>
        

        <M.CategoryButtonWrapper>
            <button onClick={categoryRequest}>요청하기</button>
        </M.CategoryButtonWrapper>

      </M.CategoryReqWrapper>

      <M.Temp />
    </M.Wrapper>
  )
}

export default Main
