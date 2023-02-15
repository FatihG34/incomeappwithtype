import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TreeNode {
  id: number;
  name: string;
  incomeValue: number;
  children?: TreeNode[];
  totalValue?: number;
}


interface IncomeState {
  tree: TreeNode[];
}
const initialState: IncomeState = {
  tree: [
    {
      id: 1,
      name: 'Node 1',
      incomeValue: 10,
      children: [
        {
          id: 2,
          name: 'Node 1.1',
          incomeValue: 5,
          children: [
            {
              id: 3,
              name: 'Node 1.1.1',
              incomeValue: 2,
            },
            {
              id: 4,
              name: 'Node 1.1.2',
              incomeValue: 3,
            },
          ],
        },
        {
          id: 5,
          name: 'Node 1.2',
          incomeValue: 3,
        },
      ],
      totalValue: 120,
    },
    {
      id: 6,
      name: 'Node 2',
      incomeValue: 7,
      children: [
        {
          id: 7,
          name: 'Node 2.1',
          incomeValue: 4,
          children: [
            {
              id: 8,
              name: 'Node 2.1.1',
              incomeValue: 1,
            },
            {
              id: 9,
              name: 'Node 2.1.2',
              incomeValue: 2,
            },
            {
              id: 10,
              name: 'Node 2.1.3',
              incomeValue: 1,
            },
          ],
        },
        {
          id: 11,
          name: 'Node 2.2',
          incomeValue: 3,
        },
      ],
      totalValue: 220,
    },
  ]
};


export const updateTotalValue = createAction("income/updateTotalValue");

const calculateTotalValue = (node: TreeNode): number => {
  if (!node.children) {
    node.totalValue = 0;
    node.totalValue += node.incomeValue;
    return node.totalValue;
  }
  node.totalValue = 0;
  node.totalValue += node.incomeValue;
  for (const child of node.children) {
    node.totalValue += calculateTotalValue(child);
  }
  return node.totalValue;
};
export interface SendedValue {
  id: number;
  value: number;
}



export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    setTotalValue(state, action: PayloadAction<SendedValue>) {
      const setTotal = (items: TreeNode[]) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.id === action.payload.id) {
            if(!item.totalValue){
              item.totalValue = 0
            }
            item.totalValue += action.payload.value;
            item.incomeValue = action.payload.value
            break;
          } else if(item.children){
            setTotal(item.children)
          }
        }
      };
      setTotal(state.tree);
    },
    setData(state, action: PayloadAction<TreeNode>) {
      state.tree.push(action.payload);
    },
    updateItem(state, action: PayloadAction<TreeNode>) {
      const updateItem = (items: TreeNode[]) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.id === action.payload.id) {
            items[i] = action.payload;
            break;
          } else if (item.children) {
            updateItem(item.children);
          }
        }
      };
      updateItem(state.tree);
    },
    deleteItem(state, action: PayloadAction<number>) {
      const deleteItem = (items: TreeNode[]) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.id === action.payload) {
            items.splice(i, 1);
            break;
          } else if (item.children) {
            deleteItem(item.children);
          }
        }
      };
      deleteItem(state.tree);
    },
    addItem(state, action: PayloadAction<number>) {
      const addItemToNode = (items: TreeNode[]) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.id === action.payload) {
            if (!item.children) {
              item.children = [];
            }
            const newChildNode: TreeNode = {
              id: Number(new Date()),
              name: `New Node` + Number(new Date()),
              incomeValue: 0,
              children: [],
              totalValue: 0,
            };
            item.children.push(newChildNode);
            break;
          } else if (item.children) {
            addItemToNode(item.children);
          }
        }
      };
      addItemToNode(state.tree);
    },

  },
  extraReducers: (builder) => {
    builder.addCase(updateTotalValue, (state) => {
      const updateTotalValues = (items: TreeNode[]) => {
        for (const item of items) {
          item.totalValue = calculateTotalValue(item);
          if (item.children) {
            updateTotalValues(item.children);
          }
        }
      };
      updateTotalValues(state.tree);
    });
  },

})


export const { setData, updateItem, deleteItem, addItem, setTotalValue } = incomeSlice.actions;

export const selectIncome = (state: RootState) => state.income.tree;


export default incomeSlice.reducer;

