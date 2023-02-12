import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface IncomeState {
    id: number;
    incomeValue:number;
    totalValue:number;
}

const initialState: IncomeState = {
    id:0,
    incomeValue:0,
    totalValue:0,
}

export const incomeSlice = createSlice({
    name:'income',
    initialState,
    reducers:{
        incomeIncrement:(state, action:PayloadAction<number>)=>{
            state.incomeValue += action.payload
        },
        //* addNode
    }
})


export const {incomeIncrement} = incomeSlice.actions;

export default incomeSlice.reducer;

