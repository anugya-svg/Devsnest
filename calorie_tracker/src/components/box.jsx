import { useState } from "react"
const Box=(props)=>{
    const {id,title,amount,setItem,item}=props
    const [isEdit,setIsEdit]=useState(false)
    const [editData,setEditData]=useState({
        title:title,
        amount:amount
    })
   function handleClick(){
       console.log(id)
        const newItems=item.filter(crazy=>item.indexOf(crazy)!==id)
        setItem(newItems)
   }
   function handleOnEdit(){
       setIsEdit(true)
   }
   function handleOnDataChange(e){
       const title=e.target.name
       const value=e.target.value
       console.log(title)
       console.log(value)
      setEditData(current => [{ ...current,title:value}])
      

    console.log(editData)
   }
   function handleOnSave(){
       console.log("yes",editData)
       console.log(id)
        const newItem=item.map((crazy,ind)=>{
            if(ind===id)
            {   
                console.log(ind)
                console.log('ds',editData.title)
                return{
                    
                    ...crazy,
                    title:editData.title,
                    amount:editData.amount

                }
            }
            else{
                return crazy
            }
        })
        console.log(newItem)
        setItem(newItem)
        setIsEdit(false)
   }
    return(
        <div className="content">
            { isEdit ? (<input name="title" value={editData.title} onChange={handleOnDataChange}/>):
                (<h3>{title}</h3>)
            }
            {
                isEdit ?(<input name="amount" value={editData.amount}
                onChange={handleOnDataChange}/>):(<h4>You have consumed {amount} Calories</h4>)
            }
            {
                isEdit?(<button onClick={handleOnSave}>Save</button>):(<button onClick={handleOnEdit}>Edit</button>)
            }
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Box