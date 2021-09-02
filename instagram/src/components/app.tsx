import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap"
import Navbar from "./navbar";
import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import {User,updateUser} from "../action/index"
import { postUpdate } from "../action/postAction";
import Landing from "./landing";
import "../index.css"
const App=()=>{
    const dispatch = useDispatch();
    const user=useSelector((state:any)=>state.user);
    useEffect(()=>{
        dispatch(postUpdate())
        dispatch(updateUser())
    },[])
    return (
        <div>
            <Navbar/>
            <Landing/>
            
        </div>
        
    )
}
export default App;