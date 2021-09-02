export interface User{
    username:string,
    post:string;
}
const postUpdate=()=>{
    return(dispatch:any)=> {
       fetch("https://api.unsplash.com/photos/random?client_id=zrIXUszoh1-Wvz95V8bOJ5rHPzxCPaWMpnpOFYj9r_s&count=30")
       .then((res)=>res.json())
       .then((data)=>{
           dispatch({
               type:"POST_UPDATE",
               payload:data
           })
           
       })
    }
}
export {postUpdate};