import {atom} from "recoil"

const storedLocation = atom({
    key:"storedLocation",
    default:{lat:35.1535104,lng:126.861312}
    // 기본 위치는 해커톤 하는 곳
})


export {storedLocation}