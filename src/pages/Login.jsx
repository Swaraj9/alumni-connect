import React from "react";
import { HiOutlineMail } from 'react-icons/hi';
import  logo from './somaiyalogo.jpg';

const Login = () => {
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
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}><img src={logo} style={{width:'50%',height:'10%',borderRadius:10,marginBottom:"1.5rem"}} /></div>
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
          placeholder="Password"
        />
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
      </div>
    </div>
  );
};

export default Login;
