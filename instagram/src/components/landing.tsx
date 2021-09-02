import React from "react";
import { useSelector } from "react-redux";
import Post from "./post";
const Landing=()=>{

const post=useSelector((state:any)=>state.post);
const res=post.slice(15,20);
const story=React.useRef<any>(null);
    React.useEffect(()=>{
    if(story)
    {
    story.current.scrollBy({
    top:0,
    left:100,
    behaviour:"smooth"
    })
    }
    },[])
    return (
    <div className="container landing temp">
        <div className="row exp">
            <div className="col-7">
                <div className="card story" ref={story}>
                    {post.map((item:any,i:number)=>(
                    <div className="story-img" key={i}>
                        <img src={item.user.profile_image.small} alt="" /></div>

                    ))}
                </div>
                <Post/>
            </div>
            <div className="col-5">
                <div className="card right-side check position-fixed">
                    <div className="row">
                    <div className="col-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGtnPgQ6PFlikAa3YaQ5kfus0CTAvhIXo1g&usqp=CAU" className="side-bar-img"alt=""  />
                    </div>
                    <div className="col-8">
                        <p><strong>anugya_svg</strong></p>
                        <p className="hindi">अनूग्या जैन</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="hindi sub-h">Suggestions for you</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {res.map((item:any,index:number)=>(
                                <div key={index}>
                                    <img src={item.user.profile_image.small} className="sidebar-img" alt=""  />
                                    <span className="side-username"><strong>{item.user.username}</strong></span>
                                    <a className="follow" href="/">FOLLOW</a>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                    
                   
               
                    
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
    }
    export default Landing;