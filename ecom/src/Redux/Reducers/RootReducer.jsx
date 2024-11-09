import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducers from "./MaincategoryReducers";

export default combineReducers({
    MaincategoryStateData: MaincategoryReducers
})