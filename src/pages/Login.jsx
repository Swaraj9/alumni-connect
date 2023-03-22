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
      setMessage({msgBody: "Enter username and password"});
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
          required
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
          required
        />
        
        {/* incorrect credentials prompt */}
        {message && <div
          style={{
            border:"0.15rem solid #FFA500",
            borderRadius: 5,
            backgroundColor: "white",
            width:"15rem",
            minWidth:"13rem",
            textAlign:"center",
            marginBottom:8,
            display:"flex",
            justifyContent:"start",
            alignItems:"center",
            columnGap:"0.4rem",
            padding:"0.1rem 0 0.2rem 0.4rem",
            fontFamily:"sans-serif",
            fontSize:"0.95rem"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="1.45rem" height="1.45rem" 
            fill="currentColor" 
            class="bi bi-x" 
            viewBox="0 0 15 15" 
            color="#FFA500"
            margin="-1rem"
            >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          {message.msgBody}
        </div>}


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
          <button
            style={{
              flex: 1,
              border: "1px solid grey",
              outline: "none",
              padding: "0.5rem",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              marginRight:5,
            }}
          >
            Login with Somaiya email id
          </button>
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
