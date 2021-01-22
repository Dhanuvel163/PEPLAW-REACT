import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';
import {isloggedin,islawyerloggedin,isuserloggedin} from '../../service/userservice';
import {displayError,displaySuccess} from './Helpers/Error'
import {clearLoading,load} from './Helpers/Loading'
import {fetchFunc} from './Helpers/Fetchfunction'


//Add Case data

export const postusercase=(dcode,ddate,stime,acharge,desc)=>(dispatch)=>{
    var newcase={
        dcode:dcode,
        ddate:ddate,
        stime:stime,
        acharge:acharge,
        desc:desc
    }
    return fetchFunc(baseUrl+'api/useraccounts/cases',{
        method: "POST",
        body:JSON.stringify(newcase),
        headers: {
            "Content-Type": "application/json",
            "authorization":localStorage.getItem('token')
          },
        credentials: "same-origin"
    },dispatch)
    .then(Response=>{
        if(Response.success){
            displaySuccess(dispatch,'Added case Successfully!')
            dispatch(addtousercases(Response.case))
        }
    })
    .catch((error)=>{
        displayError(dispatch,error)
    }).finally(()=>{dispatch(clearLoading())})
}

//Load user cases

export const fetchusercases=()=>(dispatch)=>{
    dispatch(usercasesloading(true));

    if(isloggedin() && isuserloggedin()){
        return fetch(baseUrl+'api/useraccounts/cases',{
            headers: {
                "Content-Type": "application/json",
                "authorization":localStorage.getItem('token')
              },
            credentials: "same-origin"
        })
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
            .then(Response=>{
                if(Response.success){
                    dispatch(addusercases(Response.cases))
                }
            })
            .catch((error)=>{dispatch(usercasesfailed(error.message))})
    }else{
        return fetch(baseUrl+'api/lawyeraccounts/cases',{
            headers: {
                "Content-Type": "application/json",
                "authorization":localStorage.getItem('token')
              },
            credentials: "same-origin"
        })
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
        .then(Response=>{
            if(Response.success){
                dispatch(addusercases(Response.cases))
            }
        })
        .catch((error)=>{dispatch(usercasesfailed(error.message))})
    }
    
}

export const usercasesloading=()=>({
   type:actionTypes.ADD_USERCASES_LOADING 
})
export const usercasesfailed=(err)=>({
    type:actionTypes.ADD_USERCASESFAILED,
    payload:err
})
export const addusercases=(usercases)=>({
    type:actionTypes.ADD_USERCASES,
    payload:usercases
})
export const addtousercases=(newcase)=>({
    type:actionTypes.ADD_TO_USERCASES,
    payload:newcase
})


//Load All unlocked cases

export const fetchallcases=()=>(dispatch)=>{
    dispatch(allcasesloading(true));

    if(isloggedin() && islawyerloggedin()){
        return fetch(baseUrl+'api/lawyeraccounts/allcases',{
            headers: {
                "Content-Type": "application/json",
                "authorization":localStorage.getItem('token')
              },
            credentials: "same-origin"
        })
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
            .then(Response=>{
                if(Response.success){
                    dispatch(addallcases(Response.cases))
                }
            })
            .catch((error)=>{dispatch(allcasesfailed(error.message))})
    }
}

export const allcasesloading=()=>({
   type:actionTypes.ADD_ALLCASES_LOADING 
})
export const allcasesfailed=(err)=>({
    type:actionTypes.ADD_ALLCASESFAILED,
    payload:err
})
export const addallcases=(usercases)=>({
    type:actionTypes.ADD_ALLCASES,
    payload:usercases
})
export const filterallcases=(id)=>({
    type:actionTypes.FILTER_ALLCASES,
    payload:id
})
//accept Handler

export const postaccept=(id)=>(dispatch)=>{
    dispatch(load())
    if(isloggedin() && islawyerloggedin()){

        return fetchFunc(baseUrl+'api/lawyeraccounts/accept/'+id,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "authorization":localStorage.getItem('token')
              },
            credentials: "same-origin"
        },dispatch)
        .then(Response=>{
            if(Response.success){
                displaySuccess(dispatch,'accepted!!')
                dispatch(filterallcases(id));
                dispatch(addtousercases(Response.case))
            }
        })
        .catch((error)=>{
            displayError(dispatch,error)
        }).finally(()=>{dispatch(clearLoading())})
    }
}