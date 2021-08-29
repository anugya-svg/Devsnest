import {combineReducers} from "redux";
import todoReducer from ".";
const rootReducer=combineReducers({
    task:todoReducer
})
export default rootReducer;
export type rootType=ReturnType<typeof rootReducer>