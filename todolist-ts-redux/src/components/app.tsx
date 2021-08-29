import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add,dlt } from "../actions/index";
import { rootType } from "../reducer/combineReducer";
import "../style.css"
const App=()=>{
    const [text,setText]=useState<string>("");
    const todo=useSelector((state:rootType)=>state.task)
    const dispatch=useDispatch();
    return (
        <div className="main">
            <input placeholder="Type Something" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={()=>{dispatch(add(text))
                                    setText("")}}>Add</button>
            <div>
            {todo.map((temp:string,index:number)=>(
                    <div key={index} className="container">
                        <div>{temp}<i className="far fa-trash-alt extra" onClick={()=>{dispatch(dlt(index))}}></i></div>
                    </div>
                    
                ))}
            </div>

        </div>
    )
}
export default App;