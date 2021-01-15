import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';

import {lawyers} from './Reducer/lawerReducer';
import {users} from './Reducer/userReducer';
import {profiledata} from './Reducer/profiledataReducer';
import {usercases} from './Reducer/usercasesReducer';
import {allcases} from './Reducer/allcasesReducer';
import {errors} from './Reducer/errorReducer';
import {loading} from './Reducer/loadingReducer';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {lawyersignupform} from './form';

export const configStore=()=>{
    const store=createStore(
        combineReducers({
            lawyers:lawyers,
            users:users,
            profiledata:profiledata,
            usercases,
            allcases,
            errors,
            loading,
            ...createForms({
                lawyersignupform:lawyersignupform
            })
        }),
        // applyMiddleware(thunk,logger)
        applyMiddleware(thunk)
    );
    return store;
}