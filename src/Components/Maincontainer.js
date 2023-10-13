import React, { useState } from 'react';
import NavbarSide from './NavbarSide';
import Topbar from './Topbar';
import Trending from './Trending';
import Categories from './Categories';
import Mainrails from '../Mainrails';
import { useEffect } from 'react';
import './Classmaincss.css'
import Carousel from './Carousel';


function Maincontainer(props) {
     const [searchvalue,setsearchvalue]=useState('');
     const [showcategory,setshowcategory]=useState(true);
     const [scrollpos,setscrollpos]=useState(0);
     useEffect(()=>{
        const setscroll=()=>{
            setscrollpos(window.scrollY)
        }
        window.addEventListener('scroll',setscroll);

    },[])
    console.log(scrollpos)
    
    return (
        <div style={{display:'flex',width:"100%",height:"100vh"}} className='mainbody'>
           <NavbarSide/>
           {showcategory?<Carousel />:<></>}
           {scrollpos<=330?<Topbar setshowcategory={setshowcategory} searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>:<></>}
           {showcategory?<Categories />:<></>}

           <Mainrails searchvalue={searchvalue}/>
           
        </div>
    );
}

export default Maincontainer;