import { Input,Button,Checkbox } from '@material-ui/core';
import {add,remove,checkbox} from "../actions/index"
import {useDispatch} from "react-redux"
import {useState} from "react"
import { useSelector } from 'react-redux';
const Box=()=>{
    const [item,setItem]=useState("");
    const dispatch=useDispatch();
    const todo=useSelector((state)=>state.addTodo)
    
    return(
        <div>
            <Input variant="standard" placeholder="Type something" size="small" value={item} onChange={(e)=>{
                setItem(e.target.value)
            }}></Input>
            <Button variant="contained"  color="default" className="btn" size="medium" onClick={()=>{
                dispatch(add({
                    title:item,
                    checked:false}))
                setItem("")
            }} >ADD</Button>
            <div className="item" >
               {todo.map((ele,index)=>(<div key={index}>
                   <div className="ele">
                        <Checkbox onClick={()=>{
                        dispatch(checkbox(index))
                        }}></Checkbox>
                   
                    {ele.checked?( <h3 style={{textDecoration:"line-through"}}> {ele.title}</h3> ): <h3> {ele.title}</h3> }
                   
                   <Button variant="contained" color="secondary" size="small" onClick={()=>{
                       dispatch(remove(index))
                   }}>Delete</Button></div>
                </div>))}
            </div>
        </div>
        
    )
}
export default Box;