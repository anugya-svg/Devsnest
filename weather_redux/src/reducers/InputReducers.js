const InputReducer=(state="",action)=>{
    if(action.type==="PLACE")
    {
        return action.payload
    }
    return state;
}
export default InputReducer;