import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, editRecord, updateRecord } from "./Services";
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, EDIT_SUBCATEGORY, EDIT_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord("subcategory",action.payload)//it is calling effect means calling API
    // const response = yield createFormGroupData("subcategory",action.payload)//For Real Backend
    yield put({type:CREATE_SUBCATEGORY_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord("subcategory")
    yield put({type:GET_SUBCATEGORY_RED,payload:response})
}

function* editSaga(action) {
    const response = editRecord("subcategory",action.payload)  
    yield put({type:EDIT_SUBCATEGORY_RED,payload:response})
}

function* updateSaga(action) {
   // console.log('saga:'+action.payload);
    
    yield updateRecord("subcategory",action.payload) 
    // yield updateFormGroupData("subcategory",action.payload) //For Real Backend
    yield put({type:UPDATE_SUBCATEGORY_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord("subcategory",action.payload)
    yield put({type:DELETE_SUBCATEGORY,payload:action.payload})
}

export default function* subcategorySagas() {
    yield takeEvery(CREATE_SUBCATEGORY,createSaga)
    yield takeEvery(GET_SUBCATEGORY,getSaga)
    yield takeEvery(EDIT_SUBCATEGORY,editSaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSaga)
} 