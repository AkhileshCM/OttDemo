import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './Romancecss.css';
import {IoMdArrowRoundBack} from 'react-icons/io'
import NavbarSide from './Components/NavbarSide';
function Romance(props) {
    const passedvalue=useLocation();
    const data=passedvalue.state;
    console.log(data)
    console.log(data.toLowerCase())
    const [movie,setmovie]=useState([])
    let movies=[]
    useEffect(()=>{
        axios.get("https://test.create.diagnal.com/data/db.json")
        .then(res=>{
             setmovie(res.data["movies"])
             
             console.log(movie)
        })
        

    },[])
    const romance=movie.filter(obj=>obj['genres'].includes(data));
    const navi=useNavigate();
    const navigate=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
            movielist:movie,
        }
          navi('/details',{state:obj})
    }
    console.log(movie)
    
    var scroll=false
    const [pos,setpos]=useState(0)
   
    console.log(pos)
    const nav=useNavigate()
    const back=()=>{
        nav(-1);
    }
    return (
        <div className='Romance'>
            <p id='df'><i onClick={back}><IoMdArrowRoundBack/></i>Top results for {data}</p>
            <NavbarSide/>
        <div className='category_click_page'>
            {
                romance.map(obj=><img id={obj['title']} 
                name={obj['genres']}
                src={obj['posterUrl']}
            onClick={navigate}
            onError={(e)=>{
                e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"

            }}
        ></img>)
            }
        </div></div>
    );
}

export default Romance;