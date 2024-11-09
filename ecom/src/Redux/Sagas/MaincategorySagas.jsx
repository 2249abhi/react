import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services";
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord(action.payload)//it is calling effect means calling API
    put({type:CREATE_MAINCATEGORY_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord()
    put({type:GET_MAINCATEGORY_RED,payload:response})
}

function* updateSaga(action) {
    yield updateRecord() 
    put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord()
    put({type:DELETE_MAINCATEGORY,payload:action.payload})
}

export default function* maincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY,createSaga)
    yield takeEvery(GET_MAINCATEGORY,getSaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
} 