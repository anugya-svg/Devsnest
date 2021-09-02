import {User} from "../action/index"
const initialUser={
    username:"",
    profilePicture:""
}
export interface actionType{
    type:"UPDATE_USER",
    payload:User
}
const userReducer=(state:User=initialUser,action:any)=>{
    switch(action.type){
        case "UPDATE_USER":
            return action.payload;
        default:
            return state;
    }
}
export default userReducer;