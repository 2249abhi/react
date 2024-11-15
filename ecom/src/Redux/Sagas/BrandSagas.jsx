import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, editRecord, updateRecord } from "./Services";
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, EDIT_BRAND, EDIT_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord("brand",action.payload)//it is calling effect means calling API
    // const response = yield createFormGroupData("brand",action.payload)//for real backend
    yield put({type:CREATE_BRAND_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord("brand")
    yield put({type:GET_BRAND_RED,payload:response})
}

function* editSaga(action) {
    const response = editRecord("brand",action.payload)  
    yield put({type:EDIT_BRAND_RED,payload:response})
}

function* updateSaga(action) {
   // console.log('saga:'+action.payload);
    
    yield updateRecord("brand",action.payload) 
    // yield updateFormGroupData("brand",action.payload) //for real backend
    yield put({type:UPDATE_BRAND_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord("brand",action.payload)
    yield put({type:DELETE_BRAND,payload:action.payload})
}

export default function* brandSagas() {
    yield takeEvery(CREATE_BRAND,createSaga)
    yield takeEvery(GET_BRAND,getSaga)
    yield takeEvery(EDIT_BRAND,editSaga)
    yield takeEvery(UPDATE_BRAND,updateSaga)
    yield takeEvery(DELETE_BRAND,deleteSaga)
} 