import { all } from "redux-saga/effects";
import maincategorySagas from "./MaincategorySagas";
import subcategorySagas from "./SubcategorySagas";
import productSagas from "./ProductSagas";
import brandSagas from "./BrandSagas";
import testimonialSagas from "./TestimonialSagas";



export default function* RootSaga() {
    yield all([
        maincategorySagas(),
        subcategorySagas(),
        productSagas(),
        brandSagas(),
        testimonialSagas()
    ])
}