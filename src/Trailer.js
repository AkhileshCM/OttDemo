import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./Trailercs.css"
function Trailer(props) {
    const loca=useLocation();
    const name=loca.state;
    console.log(name)
    const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: {
          q: 'crocodile dundee'
        },
        headers: {
          'X-RapidAPI-Key': '0dfb88f4d8msh722c74baa756a2ep1a9abbjsneb3bc1cddcdc',
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
      };
      
      
      const [video,setvideo]=useState("")
      const [link,setlink]=useState("")
      
      
      useEffect(()=>{
        options.params.q="crocodile dundee";
          axios.request(options)
          .then(res=>{
            console.log(res)
            setvideo("noerror")
            setlink(res.data.videos[0]["link"])
            

              
          })
          .catch(err=>setvideo("error"))
      },[])
      console.log(link)
      const tbutton=document.getElementById("playtrailerr");
      
       const ylink=`https://www.youtube.com/results?search_query=${name}`
    
    return (
        <div className='heading'>
          <h3 style={{
            marginLeft:"20px"
          }}>Showing Trailer of<span style={{
            color:"yellow"
          }}> {name}</span></h3>
          {
            video=="noerror"?<iframe width="80%" height="315" style={{marginLeft:"10%",marginTop:"90px"}}
            src="https://www.youtube.com/watch?v=l8WPWK9mS5M">
            </iframe>:<div style={{
              marginLeft:"20%",
              marginTop:"100px"
            }}>
              
              <video width="70%" height="50%" controls>
              <source src="errorvideo.mp4" type="video/mp4"/> 
              Not able to Play
            </video>
            <h2>Cant able to play<span style={{color:"blue"}}> <a href={ylink}   style={{color:"blue"}} id="tlink">Click here</a></span></h2>
            </div>
}  
        </div>
    )
}

export default Trailer;