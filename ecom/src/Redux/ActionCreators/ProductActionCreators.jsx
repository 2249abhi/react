import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT, EDIT_PRODUCT } from "../Constant";

//this function will call in UI
export function createProduct(data) {
    return {
        type: CREATE_PRODUCT,
        payload: data
    }
}

export function getProduct() {
    return {
        type: GET_PRODUCT
    }
}

export function editProduct(id) {
    return {
        type: EDIT_PRODUCT,
        payload: id
    }
}

export function updateProduct(data) {
    return {
        type: UPDATE_PRODUCT,
        payload: data
    }
}

export function deleteProduct(data) {
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}