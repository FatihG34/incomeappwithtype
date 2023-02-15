import { call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import {updateItem,deleteItem,addItem, TreeNode,setTotalValue,SendedValue} from '../features/income/incomeSlice'



function* addTreeItemSaga(action: PayloadAction<string>) {
  // yeni TreeItem objesi oluşturma
  const newTreeItem: TreeNode = {
    id: Date.now(),
    name:action.payload,
    incomeValue:0,
    children: [],
    totalValue:0,
  };
  
  // yeni TreeItem objesini ekleyen bir eylem gönderir
  yield put(addItem(newTreeItem.id));
}

function* calcTotalValue(action:PayloadAction<SendedValue>) {
    yield put(setTotalValue(action.payload));
}

function* removeTreeItemSaga(action: PayloadAction<number>) {
  // TreeItem objesini silen bir eylem gönderir
  yield put(deleteItem(action.payload));
}

function* updateTreeItemSaga(action: PayloadAction<TreeNode>) {
  // TreeItem objesini güncelleyen bir eylem gönderir
  yield put(updateItem(action.payload));
}

export function* treeSaga() {
  yield takeLatest("income/setTotalValue", calcTotalValue);
  // ekleme işlemi dinleyicisi oluşturur
  // yield takeLatest("income/addItem", addTreeItemSaga);

  // silme işlemi dinleyicisi oluşturur
  // yield takeLatest("income/deleteItem", removeTreeItemSaga);

  // güncelleme işlemi dinleyicisi oluşturur
  // yield takeLatest("income/updateItem", updateTreeItemSaga);
}
