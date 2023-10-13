import React, { useEffect, useState } from 'react';
import {BiRightArrowAlt} from 'react-icons/bi';
import {  useNavigate } from 'react-router-dom';
import './Topbarcss.css';
function Topbar(props) {
    const {setshowcategory,searchvalue,setsearchvalue}=props;
    

    
    
    
    const navigate=useNavigate()
    // const [searchvalue,setsearchvalue]=useState("");
    const handle=(e)=>{
        // setsearchvalue(e.target.value);
        console.log(e.target.value)
        setsearchvalue(e.target.value);
        if(e.target.value.length!==0){
            setshowcategory(false)
        }
        else{
            setshowcategory(true);
        }
        // localStorage.setItem("searched",JSON.stringify(e.target.value));      
        
        
        
    }
    
    console.log(searchvalue);
    
    const store=()=>{
          navigate('/searchpage',{state:searchvalue});
    }
    return (
        <div   className='topbar'>
            <div className='input-search'>
                <input type='text' placeholder='Search for movies,lives..etc'
                defaultValue={searchvalue}
                onChange={handle}>

                </input>
                {/* <button onClick={store}><BiRightArrowAlt/></button> */}
            </div>
            
        </div>
    );
}

export default Topbar;