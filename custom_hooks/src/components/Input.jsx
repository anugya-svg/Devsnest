import { useState } from "react";
import useFetch from "./useFetch";
const Input=()=>{
    const [text,setText]=useState("");
    const clientId=`zrIXUszoh1-Wvz95V8bOJ5rHPzxCPaWMpnpOFYj9r_s`;
    const [url,setUrl]=useState("");
    const {result,isLoading}=useFetch(url);
    function handleChange(e){
        setText(e.target.value)
        
    }
    function handleClick(){
        let newUrl="https://api.unsplash.com/search/photos?page=1&query=" +
        text + "&client_id=" + clientId;
        setUrl(newUrl)
        setText("");
    }

    return (
        <div className="main">
            <div className="heading">
            <h1>React Image Search Using Unsplash API</h1>
            </div>
            
            <input placeholder="Search" onChange={handleChange} type="text" value={text} className="input" required/>
            <button onClick={handleClick} className="btn">Add</button>
            {isLoading && <h3>Image Gallery</h3>}
            {   result.length===0 && !isLoading?
                    (<h3>OOps...No result found ! </h3>):
                    (   <div className="adjust">
                        {   result && result.map((image,i) => (
                            <div className="card" key={i}>
                                <img src={image.urls.thumb} alt="" />
                            </div>
                            ))
                        }
                        </div>
                    )
            }
            
        </div>
    
    )}
export default Input;