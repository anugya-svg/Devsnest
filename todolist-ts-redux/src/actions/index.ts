const add=(val:string)=>{
    return {
        type:"ADD",
        payload:val
    }
}
const dlt=(index:number)=>{
    return {
        type:"DELETE",
        payload:index
    }
}
export {add,dlt};