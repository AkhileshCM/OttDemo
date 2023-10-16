import React from 'react';
import NavbarSide from './Components/NavbarSide';
import './Acccss.css'
import {PiSignOutBold} from "react-icons/pi"
import { useNavigate } from 'react-router-dom';
function Account(props) {
    const nav=useNavigate()
    const signut=()=>{
        localStorage.removeItem("logged")
        nav("/")
        
    }
    const nav2=useNavigate()
    
    const favouritemovielist=JSON.parse(localStorage.getItem("favmovie"))
    const moviearray=JSON.parse(localStorage.getItem("moviearr"))
    const raillist=moviearray.filter(obj=>obj["title"].includes (favouritemovielist))
    console.log(raillist)
    const todetail=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
        movielist:moviearray,
    }
          nav2('/details',{state:obj})
    }
    return (
       <>
       <div className='nav'>
        <NavbarSide/>
       </div>
        <div className='maindetail'>



            <div className='bckimgholder'>

            </div>
            <div className='fordp'>

            </div>
            <div className='mylist'>
                <h3 style={
                    {
                        margin:"0px",
                        padding:"0px",
                        marginLeft:"10px",
                        fontFamily:"sanseriff",
                        
                        
                    }
                }>My list</h3>
                <hr/>
                <div className='favmovielist'>
                    {
                        favouritemovielist.map(obj=>{
                            const movief=moviearray.filter(ob=>ob["title"]==obj)
                            console.log(movief)
                            const image=movief.map(obj=>obj["posterUrl"])
                            const tit=movief.map(obj=>obj["title"])
                            const gen=movief.map(obj=>obj["genres"])
                            return(<img
                                id={tit}
                                name={gen}
                            onClick={todetail}
                            className='accountrails'
                            onError={(e)=>{
                                e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                            }}
                            src={image}
                            
                            
                            ></img>)
                        })
                    }
                </div>


            </div>
            <div className='forsignout'>
                <button className='forsignot' onClick={signut}>SignOut</button>
            </div>
            
            
           </div>
       </>
    );
}

export default Account;
