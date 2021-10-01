import { combineReducers } from "redux";
import {
    addContactSuccess,
    deleteContactSuccess,
    fetchContactSuccess,
    changeFilter 
} from './action';
import { createReducer } from "@reduxjs/toolkit";

const contacts = [];

const items = createReducer(contacts, {
    [fetchContactSuccess]:(state, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
 [changeFilter]: (_, { payload }) => payload,    
})

export default combineReducers({
    items,
    filter
})

// const items = (state = [], { type, payload })=>{
//     switch(type){
//        case types.ADD:
//         return [...state, payload];

//         case types.DELETE:
//         return state.filter(({id}) =>id !== payload);
        
//         default:
//         return state;
//     }
// }
// const filter = (state = '', {type,payload})=>{
//     switch(type){
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//         return state;
//     }
// }
