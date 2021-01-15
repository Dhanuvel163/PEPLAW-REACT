import * as  actionTypes from '../actionTypes';

export const allcases=(state={allcases:[],isloading:true,err:null},action)=>{
    switch(action.type){
        case actionTypes.ADD_ALLCASES:
            return {...state,allcases:action.payload,isloading:false,err:null}
        case actionTypes.ADD_ALLCASESFAILED:
            return {...state,allcases:[],isloading:false,err:action.payload}
        case actionTypes.ADD_ALLCASES_LOADING:
            return {...state,allcases:[],isloading:true,err:null}
        default:
            return state;
    }
}