import React from 'react'

import Authroutes from './Authroutes'
import MainRoutes from './Routes'

import {useSelector} from 'react-redux'


const FinalRouting  =  () =>{


    const Auth  =  useSelector((state)=> state.Auth.l_data.id )


    return(
           <>

           {Auth && Auth !== null  && Auth !== 'undefined' && typeof(Auth) === 'string' ?

           <MainRoutes/>
            : 
            <Authroutes/>
            
           
        }

        
        </>
    )

}

export  default FinalRouting;