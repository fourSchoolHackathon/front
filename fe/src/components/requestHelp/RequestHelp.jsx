import React from 'react';
import { useEffect } from 'react';

const RequestHelp = () => {

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
        <div>
            도움 요청함
        </div>
    );
};

export default RequestHelp;