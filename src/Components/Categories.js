import React, { useEffect } from 'react';
import './Category.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Categories(props) {
    const category=['Romance','Thriller','Comedy','Action','Horror','Sci-Fi'];
    // useEffect(()=>{
    //     axios.get("https://www.omdbapi.com/?apikey=cbbba3f9&s=romance")
    //     .then(res=>console.log(res.data.Search))
    // })
    const nav=useNavigate();
    const navigatetocategory_page=(e)=>{
        console.log(e.target.id)
        const category1=e.target.id;
        console.log(category1)
        nav('/romance',{state:category1});


    }
    
    return (
        <div>
            <h2 className='cat'> Top Categories</h2>
        <div className='categories'>
            {
                category.map(obj=><div
                onClick={()=>{
                    nav('/romance',{state:obj});
                }}
                 id={obj} className='category-cards'>
                    <div className='title'><h3>{obj}</h3></div>
                </div>
                    )
            }
        </div>
        </div>
    );
}

export default Categories;