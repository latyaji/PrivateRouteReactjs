import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
     <div style ={styles.container }>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Aboutus'>About us</Link></li>
        <li><Link to='/Contactus'>Contact us</Link></li>
        <li><Link to='/UserDashboard'>UserDashboard us</Link></li>
     </ul>
     </div>
  )
}

export default Menu

const styles = {
   container:{
      background:"#E5E5E5",
      display:"inline"
   },
 
 
}

