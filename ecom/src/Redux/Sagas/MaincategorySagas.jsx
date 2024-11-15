import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, editRecord, updateRecord } from "./Services";
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, EDIT_MAINCATEGORY, EDIT_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord("maincategory",action.payload)//it is calling effect means calling API
    // const response = yield createFormGroupData("maincategory",action.payload)//in case of real backend
    yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord("maincategory")
    yield put({type:GET_MAINCATEGORY_RED,payload:response})
}

function* editSaga(action) {
    const response = editRecord("maincategory",action.payload)  
    yield put({type:EDIT_MAINCATEGORY_RED,payload:response})
}

function* updateSaga(action) {
   // console.log('saga:'+action.payload);
    
    yield updateRecord("maincategory",action.payload) 
    // yield updateFormGroupData("maincategory",action.payload) //in case of real backend
    yield put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord("maincategory",action.payload)
    yield put({type:DELETE_MAINCATEGORY,payload:action.payload})
}

export default function* maincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY,createSaga)
    yield takeEvery(GET_MAINCATEGORY,getSaga)
    yield takeEvery(EDIT_MAINCATEGORY,editSaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
} 