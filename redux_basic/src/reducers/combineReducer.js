import emailReducer from "./newEmail"
import userReducer from "./newUser"

import { combineReducers } from "redux"
const rootReducer=combineReducers({
    email:emailReducer,
    user:userReducer
})
export default rootReducer;