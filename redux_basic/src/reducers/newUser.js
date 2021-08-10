const userReducer=(state="",action)=>{
    if(action.type==="user")
       return action.user;
    return state;
}
export default userReducer