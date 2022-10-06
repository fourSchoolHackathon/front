import React from 'react'
import * as R from './RequestHelp.style'
import {Map,MapMarker} from "react-kakao-maps-sdk"

import { useRecoilState } from 'recoil'
import { storedLocation } from '../../stores/location/location'

import currentLoc from "../../static/requested/currentLoc.svg"

const RequestHelp = () => {
  
  const [location,setLocation] = useRecoilState(storedLocation);


  return (
    <R.Wrapper> 
      <Map
        center={location}
        style={{ width: '100%', height: '50%' }}
      >
        <MapMarker position={location} 
        // src={} >
        >
          {/* <div style={{ color: '#000' }}>Hello World!</div> */}
          {/* <R.MarkerWrapper></R.MarkerWrapper> */}
        </MapMarker>
      </Map>
    </R.Wrapper>
  )
}

export default RequestHelp
