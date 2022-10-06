import React, { useEffect, useState } from 'react'
import * as R from './RequestHelp.style'
import { Circle, Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

import { useRecoilState } from 'recoil'
import { storedLocation, storedIsLogin } from '../../stores/location/location'

import currentLoc from '../../static/requested/currentLoc.svg'

const RequestHelp = () => {
  
  const [location, setLocation] = useRecoilState(storedLocation)
  const [isLogin, setIsLogin] = useRecoilState(storedIsLogin)

  // 로그인이 안 되 었을 때 사용할 state
  const [userNumber, setUserNumber] = useState('')

  useEffect(() => {
    const userNum = localStorage.getItem('userNumber')
    setUserNumber(userNum ? userNum : '')
  }, [])
  
  // 전화번호 커스텀
  useEffect(() => {
    if (String(userNumber).length === 10) {
      setUserNumber(userNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'))
    }
    if (String(userNumber).length === 13) {
      setUserNumber(
        userNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      )
    }
    
  }, [userNumber])


  function loginInputHandler(value) {
    setUserNumber(value)
  }

  return (
    <R.Wrapper>
      <Map
        center={{ lat: location.lat - 0.035, lng: location.lng }}
        style={{ width: '100%', height: '100%' }}
        level={8}
      >
        <MapMarker
          position={location}
          image={{
            src: currentLoc,
            size: {
              width: 60,
              height: 60
            },
            options: {
              offset: {
                x: 30,
                y: 40
              }
            }
          }}
        />
        <Circle
          center={location}
          radius={5000} // 미터 단위
          strokeWeight={5}
          strokeColor={'#ff3400'}
          strokeStyle={'solid'}
          fillColor={'#ff8450'}
          fillOpacity={0.2}
        />
        <ZoomControl />
      </Map>
      {isLogin ? (
        <R.MoreInfo></R.MoreInfo>
      ) : (
        <R.MiniModal>
          <R.LoginWrapper>

            <R.GetPhoneWrapper>
            <R.LoginInput
              placeholder='전화번호'
              type="text"
              value={userNumber}
              onChange={e => loginInputHandler(e.target.value)}
            ></R.LoginInput>
            <R.LoginButon>버튼</R.LoginButon>
            </R.GetPhoneWrapper>

          </R.LoginWrapper>
        </R.MiniModal>
      )}
    </R.Wrapper>
  )
}

export default RequestHelp
