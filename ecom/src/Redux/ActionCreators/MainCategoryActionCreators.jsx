import { CREATE_MAINCATEGORY, DELETE_MAINCATEGORY, GET_MAINCATEGORY, UPDATE_MAINCATEGORY } from "../Constant";

//this function will call in UI
export function createReduxMaincategory(data) {
    return {
        type: CREATE_MAINCATEGORY,
        payload: data
    }
}

export function getReduxMaincategory() {
    return {
        type: GET_MAINCATEGORY
    }
}

export function updateReduxMaincategory(data) {
    return {
        type: UPDATE_MAINCATEGORY,
        payload: data
    }
}

export function deleteReduxMaincategory(data) {
    return {
        type: DELETE_MAINCATEGORY,
        payload: data
    }
}