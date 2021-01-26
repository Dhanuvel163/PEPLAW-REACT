import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';
import {isloggedin,islawyerloggedin,isuserloggedin} from '../../service/userservice';

//Fetch detailpage Data

export const fetchdetailpagedata=(id)=>(dispatch)=>{
    dispatch(adddetailpageloading(true))

    if(isloggedin() && islawyerloggedin()){
        return fetch(baseUrl+'api/lawyeraccounts/userprofiledetail/'+id,{headers: {'authorization':localStorage.getItem('token')}})
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
        .then(res=>{dispatch(adddetailpage(res.user))})
        .catch((error)=>{dispatch(adddetailpagefailed(error.message))})
    }else if(isloggedin() && isuserloggedin()){
        return fetch(baseUrl+'api/useraccounts/lawyerprofiledetail/'+id,{headers: {'authorization':localStorage.getItem('token')}})
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
        .then(res=>{dispatch(adddetailpage(res.lawyer))})
        .catch((error)=>{dispatch(adddetailpagefailed(error.message))})
    }
}

export const adddetailpage=(data)=>({
    type:actionTypes.ADD_DETAILPAGE,
    payload:data
})
export const adddetailpagefailed=(err)=>({
    type:actionTypes.ADD_DETAILPAGEFAILED,
    payload:err
})
export const adddetailpageloading=()=>({
    type:actionTypes.ADD_DETAILPAGE_LOADING,
})
