import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Mainrailcss.css'
import { useNavigate } from 'react-router-dom';
function Mainrails(props) {
    var flag=0;
    const {searchvalue}=props;
    const [genre,setgenre]=useState([]);
    const [getdata,setdata]=useState([])
    const navigate=useNavigate();
    const navigateto=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
        movielist:getdata,
    }
          navigate('/details',{state:obj})
    }
    useEffect(()=>{
        axios.get("https://test.create.diagnal.com/data/db.json")
        .then(res=>{
            // console.log(res.data);
            const gen=res.data['genres'];
            setgenre(gen);
            setdata(res.data['movies'])
            localStorage.setItem("moviearr",JSON.stringify(res.data['movies']));

        })
        
    },[])
    
    console.log(getdata);
    // const searchitem=JSON.parse(localStorage.getItem('searched'));
    console.log(searchvalue);
    const lsearchvalue=searchvalue.toLowerCase()
    const filtered_on_input=getdata.filter(objj=>{
        const spaceremovedtext=objj['title'].split(" ").join("");
        const lowercased=spaceremovedtext.toLowerCase();
        if(lsearchvalue.length==0){
             flag=1;
        }
        return(lowercased.includes(lsearchvalue))
       
    });
   console.log(filtered_on_input)
   console.log(flag)
    
    return (
        <div className='mainrails'>
           {
            flag!=1&&filtered_on_input.length!==0?
            <div className='wrap'>
                
                {
            filtered_on_input.map(obh=><div className='poster2'>
                
                <img
                id={obh['title']}
                name={obh["genres"]}
                onClick={navigateto}
                 onError={(e)=>{
                    e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                }} src={obh['posterUrl']}
                ></img>
            </div>)}
            </div>
          
             
             
           :genre.map(ob=>{
                const filteroncategory=getdata.filter(ov=>ov['genres'].includes(ob));
                return(<div className='poster_rail'>
                    <h2>{ob}</h2>
                    <div className='poster'>
                {
                    filteroncategory.map(oc=>
                        <div className='postercover'>
                    <img
                    id={oc['title']}
                    name={oc["genres"]}
                    onClick={navigateto}
                     onError={(e)=>{
                        e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                    }} src={oc['posterUrl']}></img></div>
                   )
                }
                 </div>
            </div>)
            })
           }
            
        </div>
    );
}

export default Mainrails;