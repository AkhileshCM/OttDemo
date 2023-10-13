import React from 'react';
import './Errorcss.css'
import { useNavigate } from 'react-router-dom';
function Errorcomponent(props) {
    const nav=useNavigate();
    const goback=()=>{
          nav(-1)
    }
    return (
        <div className='errorpage'>
            <div className='popup'>
                <p>Page cant be displayed because<br/>
                of the number of daily request has exceeded</p>
                <br/>
                <button onClick={goback}>Go back</button>
            </div>
            
        </div>
    );
}

export default Errorcomponent;