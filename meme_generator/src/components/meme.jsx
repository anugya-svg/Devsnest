import { useState } from "react"
import { Button, TextField } from '@material-ui/core';
const Meme=({meme,setMeme})=>{
    const [form,setForm]=useState({
        template_id:meme.id,
        username:"anugya-svg",
        password:"binary123",
        boxes:[]
    })
//    console.log(meme)
   const generateMeme=()=>{
       let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
       form.boxes.map((box,index)=>url+=`&boxes[${index}][text]=${box.text}`)
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           if(data.success===true)
           setMeme({...meme,url:data.data.url})
           
       })
        console.log(url)
   }
    return (
        <div className="meme">
            <img src={meme.url} alt=""/>
            <div>
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                        <TextField variant="outlined" size="small" type="text" key={index} label={`Meme Caption ${index+1}`} margin="normal" onChange={(e)=>{
                            const newBoxes=form.boxes;
                            newBoxes[index]={text:e.target.value}
                            setForm({...form,boxes:newBoxes})
                        }} style={{margin:"5px"}}></TextField>
                    ))
                }
                
            </div>
            <div>
                <Button onClick={generateMeme} size="small" variant="contained" color="secondary">Generate Meme</Button>
                <Button onClick={()=>{
                    setMeme(null)
                }} variant="contained" size="small" color="primary" style={{margin:"5px"}}>Choose Template</Button>
            </div>
        </div>
    )
}
export default Meme