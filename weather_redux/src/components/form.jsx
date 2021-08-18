import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {Input,Submit} from "../actions"
const Form=()=>{
    const dispatch=useDispatch()
    const place=useSelector((state)=>state.place)
    const theme=useSelector((state)=>state.toggle)
    return (
        <div className="col-12 form">
                <input onChange={(e)=>{
                    dispatch(Input(e.target.value))
                }} value={place} placeholder="Enter Your City"/>
                <button className="btn btn-secondary" onClick={()=>{
                    dispatch(Submit(place))
                    
                }
                }>Submit</button>
        </div>
    )
}
export default Form;