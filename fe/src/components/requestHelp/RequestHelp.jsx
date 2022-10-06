import React, { useEffect, useState } from 'react'
import * as R from './RequestHelp.style'
import { Circle, Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

import { useRecoilState } from 'recoil'
import { storedLocation, storedIsLogin } from '../../stores/location/location'

import currentLoc from '../../static/requested/currentLoc.svg'

import loading from '../../static/requested/loading.svg'

import socketio from 'socket.io-client'

const Loading = () => {
  return (
    <R.LoadingWrapper>
      <R.LoadBar>
        <h3>매칭중입니다</h3>
        {/* <img src={loading} /> */}
        <img src={loading} alt="로딩중" />
      </R.LoadBar>
      <p>곧 돌보미로부터 전화가 옴니다</p>
    </R.LoadingWrapper>
  )
}

const RequestHelp = () => {
  // 소켓 연결
  const socket = socketio.connect('https://2022hackathon.bssm.kro.kr/match')

  const [location, setLocation] = useRecoilState(storedLocation)
  const [isLogin, setIsLogin] = useRecoilState(storedIsLogin)

  // 로그인이 안 되 었을 때 사용할 state
  const [inputNum, setInputNum] = useState('')

  const [userNumber, setUserNumber] = useState('')
  //   const [certNumber, setCertNumber] = useState('')

  // 전화번호 커스텀
  useEffect(() => {
    if (String(inputNum).length === 10) {
      setInputNum(inputNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'))
    }
    if (String(inputNum).length === 13) {
      setInputNum(
        inputNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      )
    }
  }, [inputNum])

  // -------------

  // 소켓 연결
  function connectSocket(num) {
      console.log('소켓 연결', num)
      socket.emit('match', { phoneNumber: num })
      socket.on('match', msg => {
        console.log(msg)
      })
  }

  useEffect(() => {
    const storageNum = localStorage.getItem('userNumber')
    setUserNumber(storageNum === null ? '' : storageNum)
    setIsLogin(storageNum === null ? false : true)

    if (storageNum !== null) {
      connectSocket(storageNum)
    }
  }, [])

  // ------ 로그인 안 됐을 때

  function loginInputHandler(value) {
    setInputNum(value)
  }

  // 인증 버튼을 눌렀을 때
  function submitLogin() {
    setIsLogin(true)
    localStorage.setItem('userNumber', inputNum)
    connectSocket(inputNum)
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
        <R.MoreInfo>
          <Loading />
        </R.MoreInfo>
      ) : (
        <R.MiniModal>
          <R.LoginWrapper>
            <R.GetPhoneWrapper>
              <R.LoginInput
                placeholder="전화번호"
                type="text"
                value={inputNum}
                onChange={e => loginInputHandler(e.target.value)}
              ></R.LoginInput>
              <R.LoginButon onClick={submitLogin}>인증</R.LoginButon>
            </R.GetPhoneWrapper>
          </R.LoginWrapper>
        </R.MiniModal>
      )}
    </R.Wrapper>
  )
}

export default RequestHelp
