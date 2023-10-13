import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Carouselcss.css"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import axios from "axios";

function Carousel(props) {
    const object={
        1:"City of God",
        2:"The Beach",
        3:"Stardust",
        4:"Apocalypto",
        5:"Chasing Amy"
    }
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        axios.get("https://test.create.diagnal.com/data/db.json")
        .then(res=>{
             setmovie(res.data["movies"])
             
             console.log(movie)
        })
        

    },[])
    // var marr=JSON.parse(localStorage.getItem("moviearr"))
    const navigate=useNavigate();
    const navigateto=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
        movielist:movie,
    }
          navigate('/details',{state:obj})
    }
    const [imgkey,setimgkey]=useState(1)
    
    
    const colorkey={
        1:"first",
        2:"sec",
        3:"third",
        4:"fourth",
        5:"fifth"
    }
    const [count,setcount]=useState(1)
    
    window.addEventListener("load", (event) => {
        
        setimgkey(1)
        // document.getElementById("first").style.backgroundColor="yellow"
        
      });
    var neededmovie=movie.filter(obj=>obj['title']==object[imgkey])
    var backimg=neededmovie.map(ob=>ob["posterUrl"])
    // console.log(neededmovie);
    // var background={
    //     backgroundImage:`Url(${backimg})`
    // }
    const movebackward=()=>{
        if(imgkey==1){
            setimgkey(5)
            document.getElementById(colorkey[5]).style.backgroundColor="yellow"
            document.getElementById(colorkey[1]).style.backgroundColor="black"
        }
        else{
            setimgkey(imgkey-1)
            document.getElementById(colorkey[imgkey]).style.backgroundColor="black"
            document.getElementById(colorkey[imgkey-1]).style.backgroundColor="yellow"

        }

        
    }
    const movefront=()=>{

        if(imgkey<5){
            document.getElementById(colorkey[imgkey]).style.backgroundColor="black"
        setimgkey(imgkey+1)
        document.getElementById(colorkey[imgkey+1]).style.backgroundColor="yellow"
        
        }
        else{
            console.log(imgkey)
            setimgkey(1)
            document.getElementById(colorkey[1]).style.backgroundColor="yellow"
            document.getElementById(colorkey[5]).style.backgroundColor="black"
        }
    }
   
    
    return (
        <div className="carouselmain"> 

            {
                neededmovie.map(ob=>{
                    // background["backgroundImage"]=
                    // console.log(background)
                   const imgg=`url("${ob['posterUrl']}")`
                    return(<div className="innercarousel" >
                        <div className="backarrow2" onClick={movebackward} >
                           <b> <IoIosArrowBack/></b>
                        </div>
                    <div>
                    <img className="carimg" src={ob["posterUrl"]} 
                    alt="Trending"
                    id={ob['title']}
                    name={ob["genres"]}
                    onClick={navigateto}

                    ></img></div>
                    <div className="carousel-title">
                        <h1>{ob['title']}</h1>
                        <p>{ob['plot']}</p>
                        
                        </div>
                        <div className="roundmain">
                        <div id="first" className="round"></div>
                        <div id="sec" className="round"></div>
                        <div id="third" className="round"></div>
                        <div id="fourth" className="round"></div>
                        <div id="fifth" className="round"></div>
                        </div>
                        <div className="frontarrow" onClick={movefront} ><b><MdOutlineArrowForwardIos/></b></div>
                    </div>)
                }) 
            }
        </div>
    );
}

export default Carousel;

