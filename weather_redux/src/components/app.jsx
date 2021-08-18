import Form from "./form"
import Card from "./card"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Theme } from "../actions"
const App=()=>{
    const theme=useSelector((state)=>state.toggle)
    const dispatch=useDispatch();
    return (
        <div className="app">
            <button className={theme ?("btn btn-light switch"):("btn btn-dark switch") } onClick={()=>{
                dispatch(Theme())
            }}>{theme ?`Light`:`Dark`}</button>
            <div className="container">
                <div className="row">
                    <Form/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}
export default App;