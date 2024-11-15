import { CREATE_TESTIMONIAL, DELETE_TESTIMONIAL, GET_TESTIMONIAL, UPDATE_TESTIMONIAL, EDIT_TESTIMONIAL } from "../Constant";

//this function will call in UI
export function createTestimonial(data) {
    return {
        type: CREATE_TESTIMONIAL,
        payload: data
    }
}

export function getTestimonial() {
    return {
        type: GET_TESTIMONIAL
    }
}

export function editTestimonial(id) {
    return {
        type: EDIT_TESTIMONIAL,
        payload: id
    }
}

export function updateTestimonial(data) {
    return {
        type: UPDATE_TESTIMONIAL,
        payload: data
    }
}

export function deleteTestimonial(data) {
    return {
        type: DELETE_TESTIMONIAL,
        payload: data
    }
}