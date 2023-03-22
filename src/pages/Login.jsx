import React, { useContext, useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import  logo from '../img/kjsieit-logo.svg';
import AuthServices from "../services/AuthService";

const Login = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    if(!username || !password){
      setMessage("Enter username and password");
      return;
    }
    AuthServices.login({username, password}).then(data=> {
      const {isAuthenticated, user, message} = data;
      if(isAuthenticated){
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        navigate('/alumni');
      }else{
        setMessage(message);
      }
    })
  }
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        // backgroundColor: "var(--primaryD)",
        paddingTop:'5rem',
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#D9D9D9",
          flexDirection: "column",
          padding: "2rem",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}><img alt="logo" src={logo} style={{width:'50%',height:'10%',borderRadius:10,marginBottom:"1.5rem"}} /></div>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Welcome to Alumni Connect
        </div>
        <div style={{ marginBottom: "2rem" }}>
          Please enter your Somaiya email id and Password
        </div>
        <input
          style={{
            width: "90%",
            minWidth: "200px",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid grey",
            outline: "none",
            marginBottom: "1rem",
          }}
          value = {username}
          onChange = {(e) => setUsername(e.target.value)}
          placeholder="SVV Net ID"
        />
        <input
          style={{
            width: "90%",
            minWidth: "200px",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid grey",
            outline: "none",
            marginBottom: "1rem",
          }}
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        {message && <div>{message.msgBody}</div>}
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", flex: 1 ,marginLeft:"1rem"}}>
            <input type="checkbox" />
            <div>Remember Me</div>
          </div>
          <a href="#da" style={{marginRight:"1rem"}}>Forgot Password</a>
        </div>
        <button
          style={{
            width: "95%",
            minWidth: "200px",
            border: "none",
            backgroundColor: "grey",
            padding: "0.5rem",
            color: "var(--white)",
            borderRadius: "5px",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
          onClick={login}
        >
          Login
        </button>
        <div style={{ marginBottom: "1rem" }}>OR</div>
        <div style={{ display: "flex", width: "95%" }}>
          <input
            style={{
              flex: 1,
              border: "1px solid grey",
              outline: "none",
              padding: "0.5rem",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              marginRight:5,
            }}
            placeholder="Login with Somaiya email id"
          />
          <div> <HiOutlineMail style={{
            width:30,
            height:30,
          }}/> </div>
        </div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
