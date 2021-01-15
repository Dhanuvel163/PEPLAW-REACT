export const isloggedin=()=>{
    try{
        const token=localStorage.getItem('token');
        if(token){
            return true
        }else{
            return false
        }
    }catch(e){
        return false
    }
}

export const isuserloggedin=()=>{
    try {
        const islawyer=localStorage.getItem('islawyer');
        return (islawyer==='false')?true:false;        
    } catch (e) {
        return false
    }
}

export const islawyerloggedin=()=>{
    try {
        const islawyer=localStorage.getItem('islawyer');
        return (islawyer==='true')?true:false;        
    } catch (e) {
        return false
    }
}

export const getuser=()=>{
    try {
        return {name:localStorage.getItem('name')};        
    } catch (e) {
        return false    
    }
}

export const getlawyer=()=>{
    try {
        return {name:localStorage.getItem('name')};        
    } catch (e) {
        return false    
    }
}