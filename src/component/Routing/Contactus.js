import React from 'react'

function Contactus() {
  return (
   <>
     <div style={styles.section}>Welcome to Login page</div>
    <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </>
  )
}

export default Contactus


const styles = {
  section:{
     color: "red"

  }
}