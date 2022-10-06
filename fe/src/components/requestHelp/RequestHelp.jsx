import React, { useEffect, useState } from 'react'
import * as R from './RequestHelp.style'
import {Circle, Map,MapMarker, ZoomControl} from "react-kakao-maps-sdk"

import { useRecoilState } from 'recoil'
import { storedLocation,storedIsLogin } from '../../stores/location/location'

import currentLoc from "../../static/requested/currentLoc.svg"

const RequestHelp = () => {

  const [location,setLocation] = useRecoilState(storedLocation);
  const [isLogin,setIsLogin] = useRecoilState(storedIsLogin);

  const [userNumber,setUserNumber] = useState(null);
  
  useEffect(() => {
    setUserNumber(localStorage.getItem('userNumber'))
  },[])


  return (
    <R.Wrapper> 
      <Map
        center={{lat:location.lat-0.035,lng:location.lng}}
        style={{ width: '100%', height: '100%' }}
        level={8}
      >
        <MapMarker 
        position={location} 
        image={{
            src:currentLoc,
            size:{
                width:60,
                height:60,
            },
            options:{
                offset:{
                    x:30,
                    y:40,
                }
            }
        }}
        />
        <Circle
          center={location}
          radius={5000} // 미터 단위
          strokeWeight={5}
          strokeColor={"#ff3400"}
          strokeStyle={"solid"}
          fillColor={"#ff8450"}
          fillOpacity={0.2}
        />
        <ZoomControl/>
      </Map>


      <R.MoreInfo></R.MoreInfo>
    </R.Wrapper>
  )
}

export default RequestHelp
