interface addType{
    type:string,
    payload:string
}
interface dltType{
    type:string,
    payload:number
}
type actionType=addType | dltType;
const p:string[]=[];
const todoReducer=(state:any[]=p,action:actionType)=>{
    switch(action.type){
        case "ADD":
            return [...state,action.payload];
        case "DELETE":
            return state.filter((todo:string,index:number)=>index!==action.payload);
        default:
            return state;
    }
}
export default todoReducer;