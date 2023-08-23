
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products:productReducer
})

const store = configureStore({reducer:rootReducer});

export default store