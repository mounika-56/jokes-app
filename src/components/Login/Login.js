import React from "react";
import { myBasket } from "../../App";
import './Login.css'

export const Login=()=>{
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {setMyPage}= React.useContext(myBasket)
    

    const dummyUsername = 'mounika';
    const dummyPassword = 'mounika@4';
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (username === dummyUsername && password === dummyPassword) {
        setMyPage('home')
       
      } else {
        alert('Invalid username or password');
      }
    };
  
    return (

      <div className="login-form-container">
          <div className='userDetails'>
            <h1>Login Details</h1>
            <p>username:mounika</p>
            <p>password:mounika@4</p>
          </div>
          <h1 style={{fontSize:'1.5em', marginTop:'1em'}}>Login</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-container">
             <label className="input-label" htmlFor="email">USERNAME</label>
             <input
               type="text"
               id="username"
               name='username'
               className="username-input-field"
               value={username}
               onChange={handleUsernameChange}
               placeholder="Enter Username"
               required
            />
            </div>
           <div className="input-container">
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input
            type="password"
            name='password'
            id="password"
            className="password-input-field"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            required
            />
           </div>
          <button type="submit" className="login-button" style={{marginBottom:'0em'}}>Login</button>  
        </form>      
    </div>
    );
  };
