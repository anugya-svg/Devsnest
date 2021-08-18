import { combineReducers } from "redux";
import InputReducer from "./InputReducers"
import SubmitReducer from "./SubmitReducer"
import themeReducer from "./themeReducer";
const rootReducer=combineReducers({
    place:InputReducer,
    placeData:SubmitReducer,
    toggle:themeReducer
})
export default rootReducer