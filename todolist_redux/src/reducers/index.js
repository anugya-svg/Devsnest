const check=(state=[],action)=>{
    if(action.type==="Add")
    return [...state,action.payload]
    else if (action.type==="Remove")
    return state.filter((todo,index)=>index!==action.payload)
    else if(action.type==="Checkbox")
    {   
        return state.map((todo,index)=>index===action.payload?{...todo,checked:!todo.checked}:todo)
    }
    return state;
}
export default check;