export const isloggedin=()=>{
    const token=localStorage.getItem('token');
    if(token){
        return true
    }else{
        return false
    }
}

export const isuserloggedin=()=>{
    const islawyer=localStorage.getItem('islawyer');
    return (islawyer==='false')?true:false;
}

export const islawyerloggedin=()=>{
    const islawyer=localStorage.getItem('islawyer');
    return (islawyer==='true')?true:false;
}

export const getuser=()=>{
    return {name:localStorage.getItem('name')};
}

export const getlawyer=()=>{
    return {name:localStorage.getItem('name')};
}