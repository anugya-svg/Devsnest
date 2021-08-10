import reducer from "./reducers/combineReducer"
import { createStore } from "redux"
const store=createStore(reducer)
export default store;