import { useEffect,useState } from "react"

function useFetch(url){
    const [result,setResult]=useState('')
    const [isLoading,setIsLoading]=useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data.results)
                setResult(data.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.log("Error Reading data " + err);
              });
        },2000)
    },[url])
    return {result,isLoading}
}
export default useFetch;