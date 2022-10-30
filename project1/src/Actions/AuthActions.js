import axios from 'axios'

import {regApiLoading , regApiSuccess , regApiFailure} from './ActionCreators'
import {loginApiLoading  ,loginApiSuccess , loginApiFailure} from './ActionCreators'
import {base_url} from './config'



export const loginAction  = (data) =>{

    return (dispatch) =>{
        dispatch(loginApiLoading())
        axios.post(base_url + '/user_login' , data).then((res)=>{
            dispatch(loginApiSuccess(res.data))

        }).catch((err)=>{
            dispatch(loginApiFailure(err.response.data))

        })

    }

}


export const RegisterAction  = (data) =>{
    console.log(data)

    return (dispatch) =>{
        dispatch(regApiLoading())
        axios.post(base_url + '/user_register' , data).then((res)=>{
            dispatch(regApiSuccess(res.data))

        }).catch((err)=>{
            dispatch(regApiFailure(err.response.data))

        })

    }

}