import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Favcss.css";
function Favourites(props) {
    const fav=JSON.parse(localStorage.getItem('favorites'))
   const [movie,setmovie]=useState([])
    console.log(fav)
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/users',
        // headers:{
        //     "Access-Control-Allow-Origin":"*"
        // }
        
      };
   useEffect(()=>{
    axios.get("http://localhost:5000/users")
    .then(res=>{
           setmovie(res.data)
    })
    .catch(err=>console.log(err))
   },[])
    const moviearr=movie.map(obj=>obj['movie']);
    const moviearr2=moviearr.map(obj=>{
        let m=obj[0]
        console.log(m)
        return(m)
    });
    const idarray=moviearr2.map(obj=>obj.id)
    const id=idarray.filter((item,index)=>idarray.indexOf(item)===index)
    console.log(moviearr2)
    var arr=[]
    var obj={}
    for(let i in moviearr2){
        let id=moviearr2[i]['id']
        obj[id]=moviearr2[i]
    }
    for (let i in obj){
        arr.push(obj[i])
    }
    console.log(arr)
    // for(let i=0;i<moviearr2.length;i++){
    //              for(let j=0;j<id.length;j++){
    //                 const m=moviearr2
    //              }
    // }
    const navigate=useNavigate();
    const a=JSON.parse(localStorage.getItem("moviearr"));
    console.log(a)
    const navigateto=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
        movielist:a,
    }
    
          navigate('/details',{state:obj})
    }
    return (
        <>
        <h3 id="ftitle">Favorites</h3>
        <div className='favmain'> 
        
        {
            arr.map(obj=><div className='favorites'>
                  <img src={obj['posterUrl']}
                  id={obj['title']}
                  name={obj['genres']}
                  onError={(e)=>{
                    e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                  }}
                  onClick={navigateto}></img>
            </div>)
        }
    </div></>
    );
}

export default Favourites;