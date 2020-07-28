import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';

import {lawyers} from './lawerReducer';
import {users} from './userReducer';
import {profiledata} from './profiledataReducer';
import {usercases} from './usercasesReducer';
import {allcases} from './allcasesReducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {lawyersignupform} from './form';

export const configStore=()=>{
    const store=createStore(
        combineReducers({
            lawyers:lawyers,
            users:users,
            profiledata:profiledata,
            usercases:usercases,
            allcases:allcases,
            ...createForms({
                lawyersignupform:lawyersignupform
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}