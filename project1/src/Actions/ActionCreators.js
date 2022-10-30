// import {SET_COUNT} from './Types';
// import {API_LOADING , API_SUCCESS ,API_FAILURE} from './Types'




// export const setCount  = (data) =>({
//     type : SET_COUNT,
//     data
// })


// export const apiLoading = () =>({
//     type :  API_LOADING
// })

// export const apiSuccess = (data) => ({
//     type :  API_SUCCESS,
//     data

// })

// export const apiFailure = (err) =>({

//     type :  API_FAILURE,
//     err

// })

import {SET_COUNT} from './Types';
import {API_LOADING , API_SUCCESS ,API_FAILURE} from './Types'
import {REG_API_LOADING , REG_API_SUCCESS , REG_API_FAILURE} from './Types'
import {LOGIN_API_LOADING , LOGIN_API_SUCCESS , LOGIN_API_FAILURE , CLEAN_AUTH} from './Types'





export const setCount  = (data) =>({
    type : SET_COUNT,
    data
})


export const apiLoading = () =>({
    type :  API_LOADING
})

export const apiSuccess = (data) => ({
    type :  API_SUCCESS,
    data

})

export const cleanAuth = () => ({
    type :  CLEAN_AUTH,
   

})

export const apiFailure = (err) =>({

    type :  API_FAILURE,
    err

})




export const regApiLoading = () =>({

  type : REG_API_LOADING  

})

export const regApiSuccess = (data) =>({

    type : REG_API_SUCCESS,
    data
    
})
export const regApiFailure = (err) =>({
    type : REG_API_FAILURE,
    err
    
})



export const loginApiLoading = () =>({

  type :  LOGIN_API_LOADING

})

export const loginApiSuccess = (data) =>({

    type : LOGIN_API_SUCCESS,
    data

    
})
export const loginApiFailure = (err) =>({
    type : LOGIN_API_FAILURE,
    err
    
})