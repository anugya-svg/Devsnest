const Card=(props)=>{
    
    const {index,title,detail,setValue,game,checker}=props;
    // console.log(checker)
    function handleClick(){
        let newList=game.filter((p)=>p.id!==index)
        setValue(newList)
        if(newList.length===0)
        {   
            
            newList=[
                {
                    id:8,
                    title:"NO Entry left",
                    checker:true
                }
            ]
            setValue(newList)
        }
    }
    return (
        <div className="card">
            <h2>{title}</h2>
            <h4 style={{display:checker?'none':'inline-block'}}>you have consumed {detail} cals today</h4>
            <button onClick={handleClick} style={{display:checker?'none':'inline-block'}}>Del</button>
        </div>
    )
}
export default Card;