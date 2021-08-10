const user=(val)=>{
    return{
        type:"user",
        user:val
    }
}
const email=(val)=>{
    return{
        type:"email",
        email:val
    }
}
export {user,email}