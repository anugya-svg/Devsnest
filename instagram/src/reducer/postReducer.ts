const postReducer=(state:any=[],action:any)=>{
    switch(action.type){
        case "POST_UPDATE":
            return action.payload;
        default:
            return state;
    }
}
export default postReducer;