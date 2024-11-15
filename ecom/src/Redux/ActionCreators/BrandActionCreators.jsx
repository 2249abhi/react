import { CREATE_BRAND, DELETE_BRAND, GET_BRAND, UPDATE_BRAND, EDIT_BRAND } from "../Constant";

//this function will call in UI
export function createBrand(data) {
    return {
        type: CREATE_BRAND,
        payload: data
    }
}

export function getBrand() {
    return {
        type: GET_BRAND
    }
}

export function editBrand(id) {
    return {
        type: EDIT_BRAND,
        payload: id
    }
}

export function updateBrand(data) {
    return {
        type: UPDATE_BRAND,
        payload: data
    }
}

export function deleteBrand(data) {
    return {
        type: DELETE_BRAND,
        payload: data
    }
}