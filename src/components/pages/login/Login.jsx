import React, { useState } from "react";
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(input,"http://localhost:5000/users?email=${email}&password=${password}");
        const data = await response.json();

      if (data.length > 0) {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="container">
      <form className="form">
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
        <button onClick={handleSubmit} type="submit" className="button">ورود</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;