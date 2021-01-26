import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';

import {fetchuserdata} from './Fetchuserdata'
import {fetchprofiledata,postprofiledata} from './Profiledata'
import {fetchallcases,fetchusercases,postapply,postusercase,postacceptbyuser} from './Cases'
import {fetchdetailpagedata} from './Detailpage'

import {clearLoading} from './Helpers/Loading'
import {displayError,displaySuccess,clearMessage} from './Helpers/Error'
import {fetchFunc} from './Helpers/Fetchfunction'

export {fetchuserdata,fetchprofiledata,postprofiledata,clearMessage,fetchdetailpagedata,
    fetchallcases,fetchusercases,postapply,postusercase,postacceptbyuser}


//Lawyer Signup and login

export const postlawyersignup=(name,email,password,mobile,history)=>(dispatch)=>{
    var newlawyer={
        name:name,
        email:email,
        password:password,
        mobile:mobile
    }
    newlawyer.date = new Date().toISOString();
    return fetchFunc(baseUrl+'api/lawyeraccounts/signup',{
        method: "POST",
        body:JSON.stringify(newlawyer),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        localStorage.setItem('token',Response.token)
        localStorage.setItem('islawyer',true)
        localStorage.setItem('name',Response.name)
        dispatch(fetchprofiledata())
        dispatch(fetchallcases())
        dispatch(fetchusercases())
        dispatch(fetchuserdata())
        history.push("/home");
        displaySuccess(dispatch,'You are logged in as Lawyer')
    })
    .catch((error)=>{
        displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}


export const postlawyersignin=(email,password,history)=>(dispatch)=>{
    var newlawyer={
        email:email,
        password:password
    }
    return fetchFunc(baseUrl+'api/lawyeraccounts/login',{
        method: "POST",
        body:JSON.stringify(newlawyer),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        localStorage.setItem('token',Response.token)
        localStorage.setItem('islawyer',true)
        localStorage.setItem('name',Response.name)
        dispatch(fetchprofiledata())
        dispatch(fetchallcases())
        dispatch(fetchusercases())
        dispatch(fetchuserdata())
        history.push("/home");
        displaySuccess(dispatch,'You are logged in as Lawyer')
    })
    .catch((error)=>{
        displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}


//User Signup and login

export const postusersignup=(name,email,password,mobile,history)=>(dispatch)=>{
    var newuser={
            name:name,
            email:email,
            password:password,
            mobile:mobile
    }
    newuser.date = new Date().toISOString();
    return fetchFunc(baseUrl+'api/useraccounts/signup',{
        method: "POST",
        body:JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        if(Response.success){
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',false)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            dispatch(fetchusercases())
            dispatch(fetchuserdata())
            history.push("/home");
            displaySuccess(dispatch,'You are logged in as User')
        }
    })
    .catch((error)=>{
        displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}

export const postusersignin=(email,password,history)=>(dispatch)=>{
    var newuser={
            email:email,
            password:password,
    }
    return fetchFunc(baseUrl+'api/useraccounts/login',{
        method: "POST",
        body:JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        if(Response.success){
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',false)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            dispatch(fetchusercases())
            dispatch(fetchuserdata())
            history.push("/home");
            displaySuccess(dispatch,'You are logged in as User')
        }
    })
    .catch((error)=>{
        displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}













//Fetch Lawyers

export const fetchlawyers=()=>(dispatch)=>{
    dispatch(lawyersloading(true));

    return fetch(baseUrl+'lawyers')
            .then((res)=>{
                if(res.ok){
                    return res;
                }else{
                    var error=new Error('Error'+res.status+res.statusText)
                    error.res=res;
                    throw error;
                }
            },
            (error)=>{
                throw new Error(error.message)
            })
            .then(res=> res.json())
            .then(lawyers=>{dispatch(addlawyers(lawyers))})
            .catch((error)=>{dispatch(lawyersfailed(error.message))})
}

export const lawyersloading=()=>({
   type:actionTypes.LAWYERS_LOADING 
})

export const lawyersfailed=(err)=>({
    type:actionTypes.LAWYERS_FAILED,
    payload:err
})

export const addlawyers=(lawyers)=>({
    type:actionTypes.ADD_LAWYERS,
    payload:lawyers
})
