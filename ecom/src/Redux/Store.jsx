import { configureStore } from "@reduxjs/toolkit"
import RootSaga from "./Sagas/RootSaga"
import RootReducer from "./Reducers/RootReducer"
import createSagaMiddleware from "redux-saga"

const saga = createSagaMiddleware()

const Store = configureStore({
    reducer: RootReducer,
    middleware: ()=>[saga]
})

export default Store

saga.run(RootSaga)