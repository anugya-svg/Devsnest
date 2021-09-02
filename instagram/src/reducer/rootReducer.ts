import userReducer from "./userReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import { postUpdate } from "../action/postAction";
const rootReducer=combineReducers({
    user:userReducer,
    post:postReducer
})
export default rootReducer;