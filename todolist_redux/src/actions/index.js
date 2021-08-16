const add=(item)=>{
    return{
        type:"Add",
        payload:item
    }
}
const remove=(index)=>{
    return{
        type:"Remove",
        payload:index
    }
}
const checkbox=(index)=>{
    return{
        type:"Checkbox",
        payload:index
    }
}
export {add,remove,checkbox};