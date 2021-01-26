import * as  actionTypes from '../actionTypes';
import {baseUrl} from '../url';
import {isloggedin,islawyerloggedin,isuserloggedin} from '../../service/userservice';
import {displayError,displaySuccess} from './Helpers/Error'
import {clearLoading,load} from './Helpers/Loading'
import {fetchFunc} from './Helpers/Fetchfunction'

const options = (method='GET',data=null) => {
    return (method==='GET')?{
        headers: {"Content-Type": "application/json","authorization":localStorage.getItem('token')},
        credentials: "same-origin"
    }:
    (data === null)
    ?
    {
        method:method,
        headers: {"Content-Type": "application/json","authorization":localStorage.getItem('token')},
        credentials: "same-origin"
    }
    :
    {
        method:method,body:JSON.stringify(data),
        headers: {"Content-Type": "application/json","authorization":localStorage.getItem('token')},
        credentials: "same-origin"
    }
}

//Add Case data

export const postusercase=(dcode,ddate,stime,acharge,desc)=>(dispatch)=>{
    const newcase={dcode,ddate,stime,acharge,desc}
    return fetchFunc(baseUrl+'api/useraccounts/cases',options('POST',newcase),dispatch)
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

export const fetchusercases=()=>async(dispatch)=>{
    dispatch(usercasesloading(true));
    if(isloggedin() && isuserloggedin()){
        try{
            const [cases,acceptedcases,pendingcases] = await Promise.all ([
                fetch(baseUrl+'api/useraccounts/cases',options()),
                fetch(baseUrl+'api/useraccounts/acceptedcases',options()),
                fetch(baseUrl+'api/useraccounts/pendingcases',options())
            ])
            if(cases.ok && acceptedcases.ok && pendingcases.ok){
                const casesdata =await cases.json()
                const acceptedcasesdata =await acceptedcases.json()
                const pendingcasesdata =await pendingcases.json()
                if(casesdata.success && acceptedcasesdata.success && pendingcasesdata.success){
                    dispatch(addusercases({cases:casesdata.cases,acceptedcases:acceptedcasesdata.cases,pendingcases:pendingcasesdata.cases}))
                }else{
                    throw new Error('Error in Request')
                }
            }else{
                throw new Error('Something Went Wrong')
            }
        }catch(e){
            dispatch(usercasesfailed('Something Went Wrong'))
            // dispatch(usercasesfailed(e.message))
        }
    }else{
        try{
            const [cases,acceptedcases,pendingcases,rejectedcases] = await Promise.all ([
                fetch(baseUrl+'api/lawyeraccounts/cases',options()),
                fetch(baseUrl+'api/lawyeraccounts/acceptedcases',options()),
                fetch(baseUrl+'api/lawyeraccounts/pendingcases',options()),
                fetch(baseUrl+'api/lawyeraccounts/rejectedcases',options())
            ])
            if(cases.ok && acceptedcases.ok && pendingcases.ok && rejectedcases.ok){
                const casesdata =await cases.json()
                const acceptedcasesdata =await acceptedcases.json()
                const pendingcasesdata =await pendingcases.json()
                const rejectedcasesdata =await rejectedcases.json()
                if(casesdata.success && acceptedcasesdata.success && pendingcasesdata.success && rejectedcasesdata.success){
                    dispatch(addusercases({
                        cases:casesdata.cases,
                        acceptedcases:acceptedcasesdata.cases,
                        pendingcases:pendingcasesdata.cases,
                        rejectedcases:rejectedcasesdata.cases
                    }))
                }else{
                    throw new Error('Error in Request')
                }
            }else{
                throw new Error('Something Went Wrong')
            }
        }catch(e){
            dispatch(usercasesfailed('Something Went Wrong'))
        }
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

export const fetchallcases=()=>async(dispatch)=>{
    dispatch(allcasesloading(true));
    if(isloggedin() && islawyerloggedin()){
        try{
            const res = await fetch(baseUrl+'api/lawyeraccounts/allcases',options())
            if(res.ok){
                const data =await res.json()
                if(data.success){
                    dispatch(addallcases(data.cases))
                }else{
                    throw new Error(data.message)
                }
            }else{
                throw new Error('Something Went Wrong')
            }
        }catch(e){
            dispatch(allcasesfailed('Something Went Wrong'))
        }
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
export const acceptbyuser=(cases)=>({
    type:actionTypes.ACCEPT_BY_USER,
    payload:cases
})

//apply Handler

export const postapply=(id)=>(dispatch)=>{
    dispatch(load())
    if(isloggedin() && islawyerloggedin()){

        return fetchFunc(baseUrl+'api/lawyeraccounts/apply/'+id,options("POST"),dispatch)
        .then(Response=>{
            if(Response.success){
                displaySuccess(dispatch,'Applied successfully!!')
                dispatch(filterallcases(id));
                console.log(Response.case)
                dispatch(addtousercases(Response.case))
            }
        })
        .catch((error)=>{
            displayError(dispatch,error)
        }).finally(()=>{dispatch(clearLoading())})
    }
}


//accept by user Handler

export const postacceptbyuser=(caseid,lawyer)=>(dispatch)=>{
    dispatch(load())
    if(isloggedin() && isuserloggedin()){
        return fetchFunc(`${baseUrl}api/useraccounts/accept/${caseid}/${lawyer}`,options("POST"),dispatch)
        .then(Response=>{
            if(Response.success){
                displaySuccess(dispatch,'Accepted successfully!!')
                dispatch(acceptbyuser(Response.cases))
            }
        })
        .catch((error)=>{
            displayError(dispatch,error)
        }).finally(()=>{dispatch(clearLoading())})
    }
}