const emailReducer=(state="",action)=>{
    if(action.type==="email")
        return action.email;
    return state;
}
export default emailReducer;