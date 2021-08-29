import rootReducer from "./reducer/combineReducer";
import { createStore } from "redux"
const store=createStore(rootReducer);
export default store;