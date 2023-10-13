
import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import Searchpage from './Components/Searchpage';
import Moviedetail from './Moviedetail'
import Romance from './Romance';
import Trailer from './Trailer';
import Favourites from './Favourites';
import Protected from './Protected';
import Account from './Account';
import Ttrailer from './Ttrailer';
import SignIn from './SignIn';


function App() {
  const islogg=localStorage.getItem("logged")
  console.log(islogg)
  const [isloggedin,setisloggedin]=useState(islogg)
 console.log(isloggedin)
  
  
   
  return(
    
      
      
    
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/home' element={<Protected isloggedin={isloggedin} >
             <Maincontainer />
           </Protected>}/>
        <Route path='/details' element={<Moviedetail/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/trailer' element={<Trailer/>}/>
        <Route path='/romance' element={<Romance/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/searchpage' element={<Searchpage/>}/>
        
      </Routes>
    
    
  )
}

export default App;
