const Input = (val) => {
    return {
        type: "PLACE",
        payload: val
    }
}
const Submit = (val) => {
    return (dispatch)=>{
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=8f6a7603b7b34d7fa80180852211708&q=${val}&days=3`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            dispatch({
                type: "SUBMIT",
                payload: data
            })
        })
    }
    
}
const Theme=()=>{
    return{
        type:"TOGGLE"
    }
}
export {
    Input,
    Submit,Theme
}