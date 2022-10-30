// import {API_LOADING ,API_SUCCESS ,API_FAILURE} from '../Actions/Types'




// const ApiCall   = (state ,  action) =>{

//     if(typeof state === 'undefined')
//     {
//         return {
//             loading :  false,
//             data :  [],
//             error : {}
//         }
//     }
    

//     switch(action.type)
//     {
//         case API_LOADING :
//             return {
//                 ...state,
//                 loading : true,
//                 data  :[],
//                 error : {}
//             }
//         case API_SUCCESS :
//             return {
//                 ...state,
//                 loading : true,
//                 data  :[],
//                 error : {}
//             }
//         case API_SUCCESS :
//             return {
//                 ...state,
//                 loading : false,
//                 data  :action.data,
//                 error : {}
//             }
//         case API_FAILURE :
//             return {
//                 ...state,
//                 loading : false,
//                 data  :[],
//                 error : action.err
//             }
//         default : return state
//     }


// }

// export default ApiCall



import {API_LOADING ,API_SUCCESS ,API_FAILURE} from '../Actions/Types'




const ApiCall   = (state ,  action) =>{

    if(typeof state === 'undefined')
    {
        return {
            loading :  false,
            data :  [],
            error : {}
        }
    }
    

    switch(action.type)
    {
        case API_LOADING :
            return {
                ...state,
                loading : true,
                data  :[],
                error : {}
            }
        case API_SUCCESS :
            return {
                ...state,
                loading : false,
                data  :action.data,
                error : {}
            }
        case API_FAILURE :
            return {
                ...state,
                loading : false,
                data  :[],
                error : action.err
            }
        default : return state
    }


}

export default ApiCall