import React from 'react';
import "./Videocss.css"
function Video(props) {
    return (
        <div className='video'>
            <video id='myVideo' controls >
            <source
           
             src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"></source>
            </video>
        </div>
    );
}

export default Video;
