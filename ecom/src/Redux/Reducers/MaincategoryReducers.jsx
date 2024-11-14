import { CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, EDIT_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constant"

export default function MaincategoryReducers(state=[],action) {
  
   // console.log("Action Payload:", action.payload);
    let newState, index
    switch(action.type) {
        case CREATE_MAINCATEGORY_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState

        case GET_MAINCATEGORY_RED:
            return action.payload
        
        case EDIT_MAINCATEGORY_RED:
            
        return {
            ...state,
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          }
        
        case UPDATE_MAINCATEGORY_RED:
            let index = state.findIndex((x)=>x.id === action.payload.id)
            state[index].name = action.payload.name
            state[index].pic = action.payload.pic
            state[index].active = action.payload.active
            return state
        case DELETE_MAINCATEGORY_RED:
            newState = state.filter((x)=>x.id !== action.payload.id)
            return newState
        default:
            return state

    }
}
