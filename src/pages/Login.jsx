import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "var(--primaryD)",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "var(--white)",
          flexDirection: "column",
          padding: "2rem",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <div>Logos</div>
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
          <div style={{ display: "flex", flex: 1 }}>
            <input type="checkbox" />
            <div>Remember Me</div>
          </div>
          <a href="#da">Forgot Password</a>
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
        <div style={{ display: "flex", width: "100%" }}>
          <input
            style={{
              flex: 1,
              border: "1px solid grey",
              outline: "none",
              padding: "0.5rem",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
            placeholder="Login with Somaiya email id"
          />
          <div>Mail Icon</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
