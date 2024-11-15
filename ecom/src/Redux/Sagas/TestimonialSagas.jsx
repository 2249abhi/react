import { put, takeEvery } from "redux-saga/effects";
import { createRecord, deleteRecord, getRecord, editRecord, updateRecord } from "./Services";
import { CREATE_TESTIMONIAL, CREATE_TESTIMONIAL_RED, DELETE_TESTIMONIAL, EDIT_TESTIMONIAL, EDIT_TESTIMONIAL_RED, GET_TESTIMONIAL, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL, UPDATE_TESTIMONIAL_RED } from "../Constant";


function* createSaga(action) {
    //saga uses 'yield' instead of 'return'
    const response = yield createRecord("testimonial",action.payload)//it is calling effect means calling API
    // const response = yield createFormGroupData("testimonial",action.payload)//For Real Backend
    yield put({type:CREATE_TESTIMONIAL_RED,payload:response})
}

function* getSaga(action) {
    const response = yield getRecord("testimonial")
    yield put({type:GET_TESTIMONIAL_RED,payload:response})
}

function* editSaga(action) {
    const response = editRecord("testimonial",action.payload)  
    yield put({type:EDIT_TESTIMONIAL_RED,payload:response})
}

function* updateSaga(action) {
   // console.log('saga:'+action.payload);
    
    yield updateRecord("testimonial",action.payload) 
    // yield updateFormGroupData("testimonial",action.payload) //For Real Backend
    yield put({type:UPDATE_TESTIMONIAL_RED,payload:action.payload})
}

function* deleteSaga(action) {
    yield deleteRecord("testimonial",action.payload)
    yield put({type:DELETE_TESTIMONIAL,payload:action.payload})
}

export default function* testimonialSagas() {
    yield takeEvery(CREATE_TESTIMONIAL,createSaga)
    yield takeEvery(GET_TESTIMONIAL,getSaga)
    yield takeEvery(EDIT_TESTIMONIAL,editSaga)
    yield takeEvery(UPDATE_TESTIMONIAL,updateSaga)
    yield takeEvery(DELETE_TESTIMONIAL,deleteSaga)
} 