import React, { useEffect, useState } from 'react'
import * as R from './RequestHelp.style'
import { Circle, Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

import { useRecoilState } from 'recoil'
import { storedLocation, storedIsLogin } from '../../stores/location/location'

import loading from "../../static/requested/loading.svg"
import currentLoc from '../../static/requested/currentLoc.svg'
// import helper from "../../static/requested/currentHelper.svg"
import helper from "../../static/requested/helper.svg"

import socketio from 'socket.io-client'


const Loading = () => {
  return (
    <R.LoadingWrapper>
      <R.LoadBar>
        <h3>매칭중입니다</h3>
        <img src={loading} alt="로딩중" />
      </R.LoadBar>
    </R.LoadingWrapper>
  )
}

const Alert = ({helperName}) => {
    return (
        <R.AlertWrapper>
            <h3>돌봄이가 매칭되었습니다</h3>
            <p>곧 "{helperName}" 돌봄이로부터 전화가 옵니다</p>
        </R.AlertWrapper>
    )
}

const RequestHelp = () => {
  // 소켓 연결
  const socket = socketio('https://2022hackathon.bssm.kro.kr/match',{
    transports:['websocket']
  })

  const [location, setLocation] = useRecoilState(storedLocation)
  const [isLogin, setIsLogin] = useRecoilState(storedIsLogin)

  // 로그인이 안 되 었을 때 사용할 state
  const [inputNum, setInputNum] = useState('')

  const [userNumber, setUserNumber] = useState('')
  //   const [certNumber, setCertNumber] = useState('')

  // 매칭되는지 아닌지
  const [matching,setMatching] = useState(false);

  // 도우미 정보
  const [helperInfo,setHelperInfo] = useState({
    name:"",
    lat:"",
    lng:"",
  })
  

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
    // console.log(num.split('-').join(''))
      console.log('소켓 연결', num.split('-').join(''))
      socket.emit('match', { phoneNumber: num.split('-').join('') })
      socket.on('matchSuccess', msg => {
        setMatching(true)
        setHelperInfo({name:msg.name,lat:msg.latitude,lng:msg.longitude})
        //   {name: 'test', latitude: 30, longitude: 20}
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
        {
            helperInfo.name && 
            <MapMarker
              position={{
                lat:helperInfo.lat,
                lng:helperInfo.lng
              }}
              image={{
                src:helper,
                size:{
                    width:50,
                    height:50
                },
                options:{
                    offset:{
                        x:25,
                        y:36
                    }
                }
              }}
            />
        }
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
          {matching ? <Alert helperName={helperInfo.name} /> : <Loading /> }
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
              <R.LoginButton onClick={submitLogin}>인증</R.LoginButton>
            </R.GetPhoneWrapper>
          </R.LoginWrapper>
        </R.MiniModal>
      )}
    </R.Wrapper>
  )
}

export default RequestHelp
