import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducers from "./MaincategoryReducers";
import SubcategoryReducers from "./SubcategoryReducers";
import ProductReducers from "./ProductReducers";
import BrandReducers from "./BrandReducers";
import TestimonialReducers from "./TestimonialReducers";

export default combineReducers({
    MaincategoryStateData: MaincategoryReducers,
    SubcategoryStateData: SubcategoryReducers,
    ProductStateData: ProductReducers,
    BrandStateData: BrandReducers,
    TestimonialStateData: TestimonialReducers,
})