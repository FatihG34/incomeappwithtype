import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TreeNode {
  id: number;
  name:string;
  incomeValue:number;
  totalValue:number;
  children: TreeNode[];
}

interface State {
  tree: TreeNode[];
}

const initialState: State = {
  tree: [
    {
    id: 1,
    name:'Jhon',
    incomeValue:0,
    totalValue:20,
    children: [
        {
        id: 2,
        name:'Ali',
        incomeValue:0,
        totalValue:0,
        children: []
        },
        {
        id: 3,
        name:'Ali',
        incomeValue:0,
        totalValue:0,
        children: []
        }
    ]
    }
  ]
};


export const incomeSlice = createSlice({
    name:'income',
    initialState,
    reducers:{
        addNode:(state, action:PayloadAction<TreeNode>)=>{
                state.tree.push(action.payload)
        },
        removeNode:(state, action:PayloadAction<TreeNode>)=>{
                state.tree = state.tree.filter(node => node.id !== action.payload.id);
        },
        incomeIncrement:(state, action:PayloadAction<number>)=>{
            state.tree[0].totalValue = action.payload
        },
        totalIncrement:(state, action:PayloadAction<number>)=>{
            state.tree[0].totalValue += action.payload
        },
        //* addNode
    }
})


export const {incomeIncrement,totalIncrement,addNode} = incomeSlice.actions;

export const selectIncome = (state: RootState) => state.income;


export default incomeSlice.reducer;

