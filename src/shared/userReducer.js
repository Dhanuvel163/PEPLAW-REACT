import {isloggedin,islawyerloggedin,isuserloggedin,getuser,getlawyer} from '../service/userservice';
import * as  actionTypes from './actionTypes';

let USERS={};

if(isloggedin()){
    if(islawyerloggedin()){
            USERS={
                isloggedin:true,
                user:getlawyer().name,
                islawyer:true
            }
    }else if(isuserloggedin()){
            USERS={
                isloggedin:true,
                user:getuser().name,
                islawyer:false
            }
    }
}else{
        USERS={
            isloggedin:false,
        }
}

export const users=(state=USERS,action)=>{
    switch(action.type){
        case actionTypes.ISLAWYERLOGGEDIN:
            return action.payload
        case actionTypes.ISUSERLOGGEDIN:
            return action.payload
        case actionTypes.USERLOGGEDOUT:
            return action.payload
        default:
            return state;
    }
}