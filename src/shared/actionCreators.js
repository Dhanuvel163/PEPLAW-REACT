import * as  actionTypes from './actionTypes';
import {baseUrl} from './url';
import {isloggedin,islawyerloggedin,isuserloggedin,getuser,getlawyer} from '../service/userservice';

//Lawyer Signup and login

export const postlawyersignup=(name,email,password,mobile,history)=>(dispatch)=>{
    dispatch(load())
    var newlawyer={
            name:name,
            email:email,
            password:password,
            mobile:mobile
    }
    newlawyer.date = new Date().toISOString();

    return fetch(baseUrl+'api/lawyeraccounts/signup',{
        method: "POST",
        body:JSON.stringify(newlawyer),
        headers: {
          "Content-Type": "application/json"
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
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',true)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            dispatch(fetchallcases())
            dispatch(fetchusercases())

            dispatch(fetchuserdata())
            history.push("/home");
            dispatch(successMessage('You are logged in as Lawyer'))
        }else{
        dispatch(errorMessage(Response.message))
        }
    })
    .catch((error)=>{
        dispatch(errorMessage(error.message))
    }).finally(()=>{dispatch(clearLoading())})

}


export const postlawyersignin=(email,password,history)=>(dispatch)=>{
    dispatch(load())
    var newlawyer={
            email:email,
            password:password,
    }

    return fetch(baseUrl+'api/lawyeraccounts/login',{
        method: "POST",
        body:JSON.stringify(newlawyer),
        headers: {
          "Content-Type": "application/json"
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
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',true)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            dispatch(fetchallcases())
            dispatch(fetchusercases())
            dispatch(fetchuserdata())
            history.push("/home");
            dispatch(successMessage('You are logged in as Lawyer'))
        }else{
            dispatch(errorMessage(Response.message))
        }
    })
    .catch((error)=>{
            dispatch(errorMessage('Unable to process signin:'+error.message))
    }).finally(()=>{dispatch(clearLoading())})
}


//User Signup and login

export const postusersignup=(name,email,password,mobile,history)=>(dispatch)=>{
    dispatch(load())
    var newuser={
            name:name,
            email:email,
            password:password,
            mobile:mobile
    }
    newuser.date = new Date().toISOString();

    return fetch(baseUrl+'api/useraccounts/signup',{
        method: "POST",
        body:JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json"
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
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',false)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            // dispatch(fetchallcases())
            dispatch(fetchusercases())
            dispatch(fetchuserdata())
            history.push("/home");
            dispatch(successMessage('You are logged in as User'))
        }else{
            dispatch(errorMessage(Response.message))
        }
    })
    .catch((error)=>{
        dispatch(errorMessage('Unable to process signup:'+error.message))
    }).finally(()=>{dispatch(clearLoading())})

}

export const postusersignin=(email,password,history)=>(dispatch)=>{
    dispatch(load())
    var newuser={
            email:email,
            password:password,
    }

    return fetch(baseUrl+'api/useraccounts/login',{
        method: "POST",
        body:JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json"
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
            localStorage.setItem('token',Response.token)
            localStorage.setItem('islawyer',false)
            localStorage.setItem('name',Response.name)
            dispatch(fetchprofiledata())
            // dispatch(fetchallcases())
            dispatch(fetchusercases())
            dispatch(fetchuserdata())
            history.push("/home");
            dispatch(successMessage('You are logged in as User'))
        }else{
            dispatch(errorMessage(Response.message))
        }
    })
    .catch((error)=>{
            dispatch(errorMessage('Unable to process signin:'+error.message))
    }).finally(()=>{dispatch(clearLoading())})
}

//Maintaining user logged in

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

//Edit Profile

export const fetchprofiledata=()=>(dispatch)=>{
    dispatch(addprofileloading(true))

    if(isloggedin() && islawyerloggedin()){
        return fetch(baseUrl+'api/lawyeraccounts/profile',{headers: {'authorization':localStorage.getItem('token')}})
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
        .then(lawyer=>{dispatch(addprofiledata(lawyer))})
        .catch((error)=>{dispatch(addprofilefailed(error.message))})
    }else if(isloggedin() && isuserloggedin()){
        return fetch(baseUrl+'api/useraccounts/profile',{headers: {'authorization':localStorage.getItem('token')}})
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
        .then(lawyer=>{dispatch(addprofiledata(lawyer))})
        .catch((error)=>{dispatch(addprofilefailed(error.message))})
    }
}

export const addprofiledata=(data)=>({
    type:actionTypes.ADD_PROFILEDATA,
    payload:data
})

export const addprofilefailed=(err)=>({
    type:actionTypes.ADD_PROFILEDATAFAILED,
    payload:err
})

export const addprofileloading=()=>({
    type:actionTypes.ADD_PROFILEDATA_LOADING,
})

//post edited profile data

export const postprofiledata=(name,mobile,country,city,addr1,state,postalCode)=>(dispatch)=>{
    dispatch(addprofileloading(true))
    if(islawyerloggedin()){
        return fetch(baseUrl+'api/lawyeraccounts/profile',{
            method: "POST",
            body:JSON.stringify({name,mobile,country,city,addr1,state,postalCode}),
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "authorization":localStorage.getItem('token')
            },
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
            .then(lawyer=>{
                dispatch(successMessage('Edited Successfully!!'))
                dispatch(fetchprofiledata())})
            .catch((error)=>{
            dispatch(errorMessage('Something went wrong:'+error.message))
                })
    }else if(isuserloggedin()){
        return fetch(baseUrl+'api/useraccounts/profile',{
            method: "POST",
            body:JSON.stringify({name,mobile,country,city,addr1,state,postalCode}),
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "authorization":localStorage.getItem('token')
            },
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
            .then(lawyer=>{
                dispatch(successMessage('Edited Successfully!!'))
                dispatch(fetchprofiledata())})
            .catch((error)=>{
                dispatch(errorMessage('Something went wrong:'+error.message))
                })
    }
}

//Add Case data

export const postusercase=(dcode,ddate,stime,acharge,desc)=>(dispatch)=>{
    dispatch(load())
    var newcase={
        dcode:dcode,
        ddate:ddate,
        stime:stime,
        acharge:acharge,
        desc:desc
    }

    return fetch(baseUrl+'api/useraccounts/cases',{
        method: "POST",
        body:JSON.stringify(newcase),
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
            dispatch(successMessage('Added case Successfully!'))
            dispatch(fetchusercases())
        }else{
                dispatch(errorMessage(Response.message))
        }
    })
    .catch((error)=>{
        dispatch(errorMessage('Unable to process Information:'+error.message))        
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

//accept Handler

export const postaccept=(id)=>(dispatch)=>{
    dispatch(load())
    if(isloggedin() && islawyerloggedin()){
        return fetch(baseUrl+'api/lawyeraccounts/accept/'+id,{
            method:"POST",
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
                    dispatch(successMessage('accepted!!'))
                    dispatch(fetchallcases());
                    dispatch(fetchusercases());
                }
            })
            .catch((error)=>{
                    dispatch(errorMessage('Error in accepting!!'))
            }).finally(()=>{dispatch(clearLoading())})
    }
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



//ERROR Message

export const errorMessage=(msg)=>({
   type:actionTypes.ERROR_MESSAGE ,
   payload:msg
})

export const successMessage=(msg)=>({
    type:actionTypes.SUCCESS_MESSAGE,
    payload:msg
})

export const clearMessage=(lawyers)=>({
    type:actionTypes.CLEAR_MESSAGE,
})

//LOADING
export const load=()=>({
   type:actionTypes.LOADING
})

export const clearLoading=(lawyers)=>({
    type:actionTypes.CLEAR_LOADING,
})