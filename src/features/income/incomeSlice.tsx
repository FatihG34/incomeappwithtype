import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



export interface IncomeState {
    id: number;
    name:string;
    incomeValue:number;
    totalValue:number;
}

const initialState: IncomeState = {
    id:0,
    name:"Can",
    incomeValue:0,
    totalValue:0,
}

export const incomeSlice = createSlice({
    name:'income',
    initialState,
    reducers:{
        incomeIncrement:(state, action:PayloadAction<number>)=>{
            state.incomeValue = action.payload
        },
        totalIncrement:(state, action:PayloadAction<number>)=>{
            state.totalValue += action.payload
        },
        //* addNode
    }
})


export const {incomeIncrement,totalIncrement} = incomeSlice.actions;

export const selectIncome = (state: RootState) => state.income;


export default incomeSlice.reducer;

