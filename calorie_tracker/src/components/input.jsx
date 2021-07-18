import { useState } from "react"
import Card from "./card"
const Entered=()=>{
    const [name,setName]=useState("")
    const [calorie,setCalorie]=useState("")
    const [item,setItem]=useState([])
    function btnClicked(){
        setItem((preState)=>[...preState,{title:name,amount:calorie}])
        setName("")
        setCalorie("")
    }
    return(
        <div>
            <input type="Text" placeholder="Item Name" className="input-text" onChange={(e)=>{
                setName(e.target.value)
            }} value={name}></input>
            <input type="number" placeholder="Calorie Amount" className="input-text" onChange={(e)=>{
                setCalorie(e.target.value)
            }} value={calorie}></input>
            <button className="btn-add" onClick={btnClicked}>Add Item</button>
            {item.length===0 && <h2 style={{textAlign:'center'}}>Start Adding item</h2>}
            <Card item={item} setItem={setItem}/>
        </div>
    )
}
export default Entered