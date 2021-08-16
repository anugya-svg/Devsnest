import check from "./index"
import { combineReducers } from "redux"
const rootReducer=combineReducers({
    addTodo:check,
    
})
export default rootReducer;