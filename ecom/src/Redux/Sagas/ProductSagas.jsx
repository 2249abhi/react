import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, editRecord, updateRecord } from "./Services";
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, EDIT_PRODUCT, EDIT_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord("product",action.payload)//it is calling effect means calling API
    // const response = yield createFormGroupData("product",action.payload)//For Real Backend
    yield put({type:CREATE_PRODUCT_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord("product")
    yield put({type:GET_PRODUCT_RED,payload:response})
}

function* editSaga(action) {
    const response = editRecord("product",action.payload)  
    yield put({type:EDIT_PRODUCT_RED,payload:response})
}

function* updateSaga(action) {
   // console.log('saga:'+action.payload);
    
    yield updateRecord("product",action.payload) 
    // yield updateFormGroupData("product",action.payload) //For Real Backend
    yield put({type:UPDATE_PRODUCT_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord("product",action.payload)
    yield put({type:DELETE_PRODUCT,payload:action.payload})
}

export default function* productSagas() {
    yield takeEvery(CREATE_PRODUCT,createSaga)
    yield takeEvery(GET_PRODUCT,getSaga)
    yield takeEvery(EDIT_PRODUCT,editSaga)
    yield takeEvery(UPDATE_PRODUCT,updateSaga)
    yield takeEvery(DELETE_PRODUCT,deleteSaga)
} 