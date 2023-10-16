import React from 'react';

function Video(props) {
    return (
        <div className='video'>
            <video height="500px" width="80%" controls >
            <source
            width="80%"
             src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"></source>
            </video>
        </div>
    );
}

export default Video;