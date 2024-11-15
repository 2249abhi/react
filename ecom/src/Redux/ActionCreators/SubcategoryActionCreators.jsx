import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, GET_SUBCATEGORY, UPDATE_SUBCATEGORY, EDIT_SUBCATEGORY } from "../Constant";

//this function will call in UI
export function createSubcategory(data) {
    return {
        type: CREATE_SUBCATEGORY,
        payload: data
    }
}

export function getSubcategory() {
    return {
        type: GET_SUBCATEGORY
    }
}

export function editSubcategory(id) {
    return {
        type: EDIT_SUBCATEGORY,
        payload: id
    }
}

export function updateSubcategory(data) {
    return {
        type: UPDATE_SUBCATEGORY,
        payload: data
    }
}

export function deleteSubcategory(data) {
    return {
        type: DELETE_SUBCATEGORY,
        payload: data
    }
}