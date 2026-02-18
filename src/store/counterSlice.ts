import {PayloadAction, createSlice} from "@reduxjs/toolkit"

export interface StateType{
    count:number
}

const initialState:StateType={
    count:0
}

const counterSlice=createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
        increment(state){
            state.count+=1
        },
        decrement(state){
            state.count-=1
        },
        incByVal(state,action:PayloadAction<number>){
            state.count+=action.payload
        }      
    }
})

export const {increment,decrement,incByVal}=counterSlice.actions

export const counterReducer=counterSlice.reducer