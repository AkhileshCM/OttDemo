import { Navigate } from "react-router-dom";
const Protected = ({ isloggedin, children }) => {
    console.log('isloggedin', isloggedin)
    const user=JSON.parse(localStorage.getItem("username"))
    
        
    
    if (user) {
      console.log('true');
    return children;
        
    }
    else{
      console.log('not true');
      return <Navigate to="/" replace />;
    }
    
  };
  export default Protected;
