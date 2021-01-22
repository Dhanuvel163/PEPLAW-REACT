import * as  actionTypes from '../actionTypes';

export const usercases=(state={usercasedata:[],isloading:true,err:null},action)=>{
    switch(action.type){
        case actionTypes.ADD_USERCASES:
            return {...state,usercasedata:action.payload,isloading:false,err:null}
        case actionTypes.ADD_TO_USERCASES:
            return {...state,usercasedata:state.usercasedata.concat(action.payload),isloading:false,err:null}
        case actionTypes.ADD_USERCASESFAILED:
            return {...state,usercasedata:[],isloading:false,err:action.payload}
        case actionTypes.ADD_USERCASES_LOADING:
            return {...state,usercasedata:[],isloading:true,err:null}
        default:
            return state;
    }
}