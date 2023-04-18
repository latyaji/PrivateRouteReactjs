import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

const PrivateRoute =() => {
    let loggedIn = false;
    if(loggedIn){
        return (              
             <Outlet/>
        )
    }
    else{
        // return "user is not logged in"
        return <Navigate to={"/"}/>
    }

    // return loggedIn() ? <Outlet/> :  <Navigate to={"/"}/>
    // is tarh se kr skte hai
//   return (
//     <div>
//         <h1>Welcome to PrivateRoute </h1>
//         {/* <Outlet/> */}

//     </div>
//   )
}

export default PrivateRoute