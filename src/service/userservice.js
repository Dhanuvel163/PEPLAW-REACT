import * as jwt from 'jsonwebtoken';
var config=require('../config/config')

export const isloggedin=()=>{
    const token=localStorage.getItem('token');
    if(token){
        return true
    }else{
        return false
    }
}

export const isuserloggedin=()=>{
    const token=localStorage.getItem('token');
    const decoded=jwt.verify(token,config.secret);
        return !decoded.islawyer;
}

export const islawyerloggedin=()=>{
    const token=localStorage.getItem('token');
    const decoded=jwt.verify(token,config.secret);
        return decoded.islawyer;
}

export const getuser=()=>{
    const token=localStorage.getItem('token');
    const decoded=jwt.verify(token,config.secret);
    return decoded.user;
}

export const getlawyer=()=>{
    const token=localStorage.getItem('token');
    const decoded=jwt.verify(token,config.secret);
    return decoded.lawyer;
}