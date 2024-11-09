import { CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constant"

export default function MaincategoryReducers(state=[],action) {
  
    let newState, index
    switch(action.type) {
        case CREATE_MAINCATEGORY_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState

        case GET_MAINCATEGORY_RED:
            return action.payload
        
        case UPDATE_MAINCATEGORY_RED:
            index = state.payload.findIndex((x)=>x.id === action.payload.id)
            state[index].name = state.payload.name
            state[index].pic = state.payload.pic
            state[index].active = state.payload.active
            return state
        case DELETE_MAINCATEGORY_RED:
            newState = state.filter((x)=>x.id !== action.payload.id)
            return newState
        default:
            return state

    }
}
