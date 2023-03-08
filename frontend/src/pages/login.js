import React,{useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../css/index.css";


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    
    <section>
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
        <hr />
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            
            placeholder="Username"
            required
            style={{ marginBottom: "20px", marginLeft:"75px"}} 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            
            placeholder="Password"
            required
            style={{ marginBottom: "20px",marginLeft:"80px" }} 
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;