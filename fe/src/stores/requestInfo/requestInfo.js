import {atom} from "recoil"

// 심플, 카테고리
const storedReqKind = atom({
    key:"storedReqKind",
    default:"",
})

// 카테고리의 내용
const storedCategoryInfo = atom({
    key:"storedCategoryInfo",
    default:{
        category_list:[],
        start_at:"",
        end_at:"",
        sex:"",
    }
})

export {storedReqKind,storedCategoryInfo}