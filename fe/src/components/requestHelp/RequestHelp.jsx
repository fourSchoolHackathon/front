import React from 'react'
import * as R from './RequestHelp.style'
import {Map,MapMarker} from "react-kakao-maps-sdk"

const RequestHelp = () => {
  const {kakao} = window;
  const geocoder = new kakao.maps.services.Geocoder();
  function searchAdd(){
    geocoder.addressSearch('대구광역시 수성구 천을로 70',function(result,status){
        if (status === kakao.maps.services.Status.OK){
            // const coord = new kakao.maps.LatLng(result[0].y,result[0].x);
            // console.log(coord)
            console.log("lat : ",result[0].y)
            console.log("lng : ",result[0].x)
        }
    })
  }
  searchAdd()

  // function getLocation() {
  //     if (navigator.geolocation) {
  //       // GPS를 지원하면
  //       navigator.geolocation.getCurrentPosition(
  //         function (position) {
  //           // console.log(position.coords.latitude + ' ' + position.coords.longitude);
  //           // 저장 후 리다이렉션
  //           setLocation({
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude
  //           })
  //           navigate('/req')
  //         },
  //         function (error) {
  //           console.error(error)
  //         },
  //         {
  //           enableHighAccuracy: false,
  //           maximumAge: 0,
  //           timeout: Infinity
  //         }
  //       )
  //     } else {
  //       alert('GPS를 지원하지 않습니다')
  //     }
  //   }
  //   // 렌더링 되자마자 위치를 업데이트
  // useEffect(() => {
  //     getLocation()
  // },[])

  return (
    <R.Wrapper>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '50%' }}
      >
        <MapMarker position={{ lat: 35.8448074256669, lng: 128.698241398118 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </R.Wrapper>
  )
}

export default RequestHelp
