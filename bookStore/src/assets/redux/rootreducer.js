import {combineReducers} from 'redux'
import { reducer } from './reducer'
import { regReducer } from './regReducer'
export const rootReducer=combineReducers({
    loginUser:reducer,
    regUser:regReducer,
})