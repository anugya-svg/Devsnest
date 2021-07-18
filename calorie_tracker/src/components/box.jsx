import { useState } from "react"
const Box=(props)=>{
    const {id,title,amount,setItem,item}=props
    const [isEdit,setIsEdit]=useState(false)
    const [editCals,setEditCals]=useState(title)
    const [editAm,setEditAm]=useState(amount)

   function handleClick(){
       console.log(id)
        const newItems=item.filter(crazy=>item.indexOf(crazy)!==id)
        setItem(newItems)
   }
   function handleOnEdit(){
       setIsEdit(true)
   }
   function handleCalsChange(e){
       
      setEditCals(e.target.value);
     
   }
   function handleAmChange(e){
       
    setEditAm(e.target.value);
    
 }
   function handleOnSave(){
       const newItem=item.filter((crazy,ind)=>{
            if(ind===id)
            {   
                crazy.title=editCals;
                crazy.amount=editAm;
            }
            return crazy;
        })
        setItem(newItem)
        setIsEdit(false)
   }
    return(
        <div className="content">
            { isEdit ? (<input name="title" value={editCals} onChange={handleCalsChange} className="changes" type="text"/>):
                (<h3>{title}</h3>)
            }
            {
                isEdit ?(<input name="amount" value={editAm}
                onChange={handleAmChange} className="changes" type="number"/>):(<h4>You have consumed {amount} Calories</h4>)
            }
            {
                isEdit?(<button onClick={handleOnSave} className="save">Save</button>):(<button onClick={handleOnEdit} className="edit">Edit</button>)
            }
            <button onClick={handleClick} className="dlt">Delete</button>
        </div>
    )
}
export default Box