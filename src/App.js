// import './App.css';
// import Menu from './component/Routing/Menu';
// import Home from './component/Routing/Home';
// import Aboutus from './component/Routing/Aboutus';
// import Contactus from './component/Routing/Contactus';
// import UserDashboard from './component/Routing/UserDashboard';
// import PrivateRoute from './component/Routing/PrivateRoute';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// function App() {
//   return (
//       <Router>
//         <Menu></Menu>
//         <Routes>
//           <Route path="/" Component={Home} />
//           <Route path="/Aboutus" Component={Aboutus} />
//           <Route path="/Contactus" Component={Contactus} />
//           {/* yha private route create krege */}
//            <Route path='/User' Component={PrivateRoute} >
//              <Route path="Dashboard" Component={UserDashboard} />
//            </Route>
//              {/* yha private route create end */}
//         </Routes>
//       </Router>
//   );
// }

// export default App;






// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./Navbar";
// import Home from "./Doc/Home";
// import Profile from "./Doc/Profile";
// import About from "./Doc/About";
// function App() {
//   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/about" element={<About />} />
// //       </Routes>
// //     </Router>
// <Home/>
//   );
// }
// export default App;





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Doc/Navbar";
// import Home from "./Doc/Home";
// import Profile from "./Doc/Profile";
// import About from "./Doc/About";
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;




import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Doc/Navbar";
import Protected from "./Doc/Protected";
import Home from "./Doc/Home";
import About from "./Doc/About";
import Profile from "./Doc/Profile";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    
    <BrowserRouter>
     {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
      <div>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;