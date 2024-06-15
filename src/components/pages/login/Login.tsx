import React, { useState } from "react";
import './Login.module.css'
const Login = () => { 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
   
    // const handleSubmit = (e) => { 
    //   e.preventDefault(); 
    //   // اینجا می‌توانید درخواست لاگین خود را ارسال کنید 
    //   console.log('ایمیل:', email); 
    //   console.log('رمز عبور:', password); 
    // }; 
   
    return ( 
        // <div>jwe</div>
      <div className="container"> 
        <form  className="form"> 
        {/* onSubmit={handleSubmit} */}
          <h2>ورود</h2> 
          <div className='inputGroup'> 
            <label htmlFor="email">ایمیل:</label> 
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="input "
            /> 
          </div> 
          <div className="inputGroup"> 
            <label htmlFor="password">رمز عبور:</label> 
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="input"
            /> 
          </div> 
          <button type="submit" className="button">ورود</button> 
        </form> 
      </div> 
    ); 
  }; 
   
export default Login;