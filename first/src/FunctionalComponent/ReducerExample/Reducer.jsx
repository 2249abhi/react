export default function reducer(state, action) {
 switch(action.type) {
    case "INC":
        return {num: state.num+1}
    case "DEC":
        return {num: state.num-1}
    default:
        return state
 }   
}