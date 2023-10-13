import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {BiPlayCircle} from "react-icons/bi"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import axios from 'axios';
import './Moviedetailcss.css';
import {TiTick} from "react-icons/ti"
import Errorcomponent from './Errorcomponent';
import { useState } from 'react';
import {BiArrowBack} from 'react-icons/bi'
function Moviedetail(props) {   
   const initarr=JSON.parse(localStorage.getItem("favmovie")) || []


    const locfav=localStorage.setItem("favmovie",JSON.stringify(initarr))

    const location=useLocation()
    const[errstate,seterrorstate]=useState(false);
    const[switchh,setswitchh]=useState(false);
    const data=location.state;
    const name=data.moviedetail[0];
    const moviearray=data.movielist;
    
    const category=data.moviedetail[1].split(",")[0];
    const suggestion=moviearray.filter(obj=>obj["genres"].includes(category)&&obj['title']!=name)
    const filteredmovie=moviearray.filter(obj=>obj['title'].includes(name))
    const [fav,setfav]=useState([])
    const [display,setdisplay]=useState('none')
    
    let styled={
        display:display,
        
    
    }
    const tofav=(title)=>{
        // setdisplay('inline')
        setfav(prev=>[...prev,title])
        // axios.post("http://localhost:5000/users",{
        //     movie:filteredmovie
        // })
    }
    // console.log(fav)
    // localStorage.setItem("favorites",JSON.stringify(fav))
    const navigate=useNavigate();
    
    const toggle=(e)=>{
        e.preventDefault()
       
        errstate?setswitchh(true):setswitchh(false)
    }
    const navigateto=(e)=>{
        const obj={moviedetail:[e.target.id,e.target.name],
        movielist:moviearray,
    }
          navigate('/details',{state:obj})
    }
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
    //   const [video,setvideo]=useState({})
      const [link,setlink]=useState("")

      useEffect(()=>{
        
        options.params.q=name;
          axios.request(options)
          .then(res=>{
            
            // setvideo(res.data.videos);
            setlink(res.data.videos[0]["link"])
            console.log(res.data)
         
            

              
          })
          .catch(err=>{
            err.response.status==429?seterrorstate(true):seterrorstate(false)
            console.log(err)
          })
      },[])


      


     console.log(link)















    // const nav=useNavigate();
//     const showtrailer=(e)=>{
//         nav("/trailer",{state:name})
//  }
    const navi=useNavigate()
const back=()=>{
    navi(-1)
}
const trailernav=useNavigate()



    return (
        <div  className='main-detailcontainer'>
            <div onClick={back} className='backarrow'><BiArrowBack/>Back</div>
              {
                switchh?<Errorcomponent/>:<div className='topsection'>
                <div className='forimage'>
                 {
                     filteredmovie.map(obj=><img
                     id={obj['title']}
                     name={obj["genres"]}
                     className='main-image'
                     onClick={navigateto}
                     onError={(e)=>{
                         e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                     }}
                         src={obj['posterUrl']}></img>)
                 }
                </div>
                <div className='for-detail'>
                 {
                     filteredmovie.map(obj=>{
                         const runtime=Number(obj['runtime'])
                         const hour=runtime/60;
                         const rhours=Math.floor(hour)
                         const min=(hour-rhours)*60;
                         const rmin=Math.round(min)
                         const time=rhours+"h "+rmin+"min";
                         const gen=obj['genres']
                         var len=gen.length
                         return(<div className='right-sidebar'>
                             <h2>{obj['title']} ({obj['year']})</h2>
                             <div className='runtimedetails'>
                                 <div className='inline'><div className='rounded'>
                                     <h5>{time}</h5>
                                 </div>
                                 {
                                     gen.map(ob=><div className='rounded'>
                                     <h5>{ob}</h5>
                                 </div>)
                                 }</div>
                                 <div className='plot'>
                                     <h5><span>Plot: </span>{obj['plot']}</h5>
                                     <h5><span>Director: </span>{obj['director']}</h5>
                                     <h5><span>Actors: </span>{obj['actors']}</h5>

                                     </div>
                             </div>
                             <button id='playtrailerr'  className='playtrailer' onClick={(e)=>{e.preventDefault()
                            trailernav("/trailer",{state:obj["title"]})
                            }}>
                                 <BiPlayCircle/>
                                 <a href={link}>Play Trailer</a>
                             </button>
                             <button  onClick={()=>{
                                
                                // localStorage.setItem("favorites",[])
                                
                                const f=localStorage.getItem("favmovie")

                                console.log( JSON.parse(f))
                                const moviefav=JSON.parse(f)
                                moviefav.push(obj["title"])
                                localStorage.setItem("favmovie",JSON.stringify(moviefav))
                             }} className='addtofav' >
                                 <MdOutlineFavoriteBorder/>
                                 Add to Favorites
                             </button>
                             

                             </div>)

                         
                         
                     })
                 }

                </div>
           </div>
              }
              <div className='bottom-suggest'>
                <h4>Similar Movies</h4>
                <div className='sugestion-rails'>
                    {
                        suggestion.map(obj=><div className='poster8'>
                            <img src={obj['posterUrl']}
                            id={obj['title']}
                            name={obj['genres']}
                            onClick={navigateto}
                            onError={(e)=>{
                                e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAMFBMVEWzs7Pm5ubp6enS0tKwsLDIyMjCwsK3t7e9vb3f39/V1dW6urrj4+Pb29vFxcXPz8/Wwf9zAAABj0lEQVR4nO3ay26DMBBAUWxsj3n//98WE6AkRCXqgpmq92wCUaRcDQ5IbqsKmqQSkfJijnRjmsVsr00kp9SlLCbTYkqjxTQAAAAAAAAAAAAAwD8XPqASNtYfGRXSav+R+v6yUPs2Xmp9ff81ndPi9VKLSlOLlwMpaUpTu/wQU3v5VtJ+4e+kvX8mWUgLcRrfNBhIk8Z515z/c00/LQzeOeeH/XwboX5a5RZ+OxXfW0mT57TQejcFG2mhX9K2UaVykm2kVXn+FfhHzawpE2yCjbTQ1UPdrcfRL1e3/BIMpB1vud1j4blejKQd3l/TSpSptJC829q6oJ82j2d/u3G7wUCa9Hk9DJP/Tps/oJ02H/ayRbqjSjmtLK/1+VmeAwc+jcppS0V5MoXuqUw9bV1eyy12cKbS0taR1+eAmbSwL/xGnLOUdrhb+Ncy5bR86rGSFvrzrGyknRa+nbQfL+eadnvZI6252JJUm9pYTRebkqI1tXa8pLJhanib2fLmvOE/aQAAAAAAAAAAAAAAAOBOX9NBEkXZHu6QAAAAAElFTkSuQmCC"
                                
                            }}></img>
                        </div>)
                    }
                </div>

              </div>
              {}
        </div>
    );
}

export default Moviedetail;