const SubmitReducer=(state={},action)=>{
    if(action.type==="SUBMIT")
    {
        return action.payload;
    }
    return state;
}
export default SubmitReducer;