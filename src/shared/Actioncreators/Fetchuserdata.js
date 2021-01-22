//Maintaining user logged in

import {isloggedin,islawyerloggedin,isuserloggedin,getuser,getlawyer} from '../../service/userservice';
import * as  actionTypes from '../actionTypes';

export const fetchuserdata=()=>(dispatch)=>{
    dispatch(adduserdata());
}
export const adduserdata=()=>{
    if(isloggedin()){
        if(islawyerloggedin()){
            return{
                type:actionTypes.ISLAWYERLOGGEDIN,
                payload:{
                    isloggedin:true,
                    user:getlawyer().name,
                    islawyer:true
                }
            }
        }else if(isuserloggedin()){
            return{
                type:actionTypes.ISUSERLOGGEDIN,
                payload:{
                    isloggedin:true,
                    user:getuser().name,
                    islawyer:false
                }
            }
        }
    }else{
        return{
            type:actionTypes.USERLOGGEDOUT,
            payload:{
                isloggedin:false,
            }
        }
    }
}
