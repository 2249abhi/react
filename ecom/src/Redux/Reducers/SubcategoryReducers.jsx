import { CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, EDIT_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constant"

export default function SubcategoryReducers(state=[],action) {
  
   // console.log("Action Payload:", action.payload);
    let newState, index
    switch(action.type) {
        case CREATE_SUBCATEGORY_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState

        case GET_SUBCATEGORY_RED:
            return action.payload
        
        case EDIT_SUBCATEGORY_RED:
            
        return {
            ...state,
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          }
        
        case UPDATE_SUBCATEGORY_RED:
            let index = state.findIndex((x)=>x.id === action.payload.id)
            state[index].name = action.payload.name
            state[index].pic = action.payload.pic
            state[index].active = action.payload.active
            return state
        case DELETE_SUBCATEGORY_RED:
            newState = state.filter((x)=>x.id !== action.payload.id)
            return newState
        default:
            return state

    }
}
