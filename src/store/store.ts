import {configureStore} from "@reduxjs/toolkit"
import { StateType, counterReducer } from "./counterSlice"

export interface StoreType{
    counterReducer:StateType
}

const store=configureStore({
    reducer:{
        counterReducer
    }
})

type a=ReturnType<typeof store.getState>

export default store