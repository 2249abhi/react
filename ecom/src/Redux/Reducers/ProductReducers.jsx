import { CREATE_PRODUCT_RED, DELETE_PRODUCT_RED, EDIT_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constant"

export default function ProductReducers(state=[],action) {
  
   // console.log("Action Payload:", action.payload);
    let newState, index
    switch(action.type) {
        case CREATE_PRODUCT_RED:
            newState = [...state]
            newState.push(action.payload)
            return newState

        case GET_PRODUCT_RED:
            return action.payload
        
        case EDIT_PRODUCT_RED:
            
        return {
            ...state,
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
          }
        
        case UPDATE_PRODUCT_RED:
            let index = state.findIndex((x)=>x.id === action.payload.id)
            //console.log(index);
            
            state[index].name = action.payload.name
            state[index].maincategory = action.payload.maincategory
            state[index].subcategory = action.payload.subcategory
            state[index].brand = action.payload.brand
            state[index].stock = action.payload.stock
            state[index].pic = action.payload.pic
            state[index].basePrice = action.payload.basePrice
            state[index].discount = action.payload.discount
            state[index].finalPrice = action.payload.finalPrice
            state[index].active = action.payload.active
            return state
        case DELETE_PRODUCT_RED:
            newState = state.filter((x)=>x.id !== action.payload.id)
            return newState
        default:
            return state

    }
}
