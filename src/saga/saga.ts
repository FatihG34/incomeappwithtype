import { put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {setData,updateItem,deleteItem,addItem, TreeNode} from '../features/income/incomeSlice'



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

function* removeTreeItemSaga(action: PayloadAction<number>) {
  // TreeItem objesini silen bir eylem gönderir
  yield put(deleteItem(action.payload));
}

function* updateTreeItemSaga(action: PayloadAction<TreeNode>) {
  // TreeItem objesini güncelleyen bir eylem gönderir
  yield put(updateItem(action.payload));
}

export function* treeSaga() {
  // ekleme işlemi dinleyicisi oluşturur
  yield takeLatest("tree/addTreeItemRequest", addTreeItemSaga);

  // silme işlemi dinleyicisi oluşturur
  yield takeLatest("tree/removeTreeItemRequest", removeTreeItemSaga);

  // güncelleme işlemi dinleyicisi oluşturur
  yield takeLatest("tree/updateTreeItemRequest", updateTreeItemSaga);
}
