import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
const post=useSelector((state:any)=>state.post);


const [liked,setLiked]=useState<boolean>(false)
const [saved,setSaved]=useState<boolean>(false)
        return (
        <div className="post">

            {post.map((item:any,index:number)=>(
            <div className="single-post " key={index}>
                <div className="card">
                    <div className="card-body">
                        <div className="card-header head">
                            <img src={item.user.profile_image.small} alt="profile" className="small-pic" />
                            <h5 className="card-title">{item.user.username}</h5>
                            <i className="bi bi-three-dots-vertical extra"></i>
                        </div>

                        <img className="card-img-top post-img" src={item.urls.regular} alt="Card cap" />

                        <div className="icons">
                            <i className={liked?"bi bi-heart-fill red-color icon-b":"bi bi-heart icon-b"} onClick={(e)=>{
                                // console.log(e.target)
                                setLiked(!liked)
                                }}></i>
                            <i className="bi bi-chat icon-b"></i>
                            <i className="bi bi-share icon-b"></i>
                            <i className={saved?"bi bi-save-fill icon-b extra":"bi bi-save icon-b extra"} onClick={()=>{
                                setSaved(!saved)
                                }}></i>
                        </div>
                        <p>Liked by<strong> {item.likes} </strong>people</p>
                        <strong>{item.user.username}</strong>
                        <p className="des">{item.alt_description}</p>
                    </div>

                </div>
            </div>

            ))}





        </div>


        )
        }

        export default Post;