import { CREATE_TESTIMONIAL_RED, DELETE_TESTIMONIAL_RED, EDIT_TESTIMONIAL_RED, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL_RED } from "../Constant"

export default function TestimonialReducers(state=[],action) {
  
   // console.log("Action Payload:", action.payload);
    let newState, index
    switch(action.type) {
        case CREATE_TESTIMONIAL_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState

        case GET_TESTIMONIAL_RED:
            return action.payload
        
        case EDIT_TESTIMONIAL_RED:
            
        return {
            ...state,
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          }
        
        case UPDATE_TESTIMONIAL_RED:
            let index = state.findIndex((x)=>x.id === action.payload.id)
            state[index].name = action.payload.name
            state[index].pic = action.payload.pic
            state[index].active = action.payload.active
            return state
        case DELETE_TESTIMONIAL_RED:
            newState = state.filter((x)=>x.id !== action.payload.id)
            return newState
        default:
            return state

    }
}
