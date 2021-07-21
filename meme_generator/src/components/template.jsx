const Template=({templates,setMeme})=>{
    return(
    <div className="temp">
            {templates.map(temp=>(
                <div key={temp.id} className="template" onClick={()=>{
                    setMeme(temp)
                }}>
                    <div style={{backgroundImage:`url(${temp.url})`}} className="image"></div>
                </div>
            ))}
    </div>
    )
}
export default Template