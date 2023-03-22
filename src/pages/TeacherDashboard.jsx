import React from "react";
import Input from "../components/Input";
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom";
import somaiya from "../img/kjsieit-logo.svg"
import UploadLOA from "./uploadloa";
import Responses from "./Responses";
import TeachCreate from "./TeachCreate";

const Inputt = (props) => {
    return (
      <input
          style={{
              width: "50%",
              minWidth: "200px",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid grey",
              outline: "none",
              marginBottom: "0.5rem",
          }}
          {...props}
      />
    )
}



const EventCard = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#dddddd",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1.5rem",
        display:'flex'
      }}
    >
      {children}
    </div>
  );
};

const TeacherDashboard = () => {
  return (
    <BrowserRouter>
    
      <div>
      
      <div
        style={{
          display: "flex",
          height: "10%",
          width: "100%",
          margin:30
        }}
      >
        <div style={{ width: "10%" }}><img src={somaiya} alt="Somaiya Logo" style={{ width: 250,marginLeft:-15 }}/></div>
        <div 
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            columnGap: "40px", 
            color:"black",
            fontSize:18
          }}>
          <div style={{width: 75}}></div>
          <NavLink to='/' style={{color:"#A02929",fontWeight:"400",textDecoration:"none",fontSize:21}}>Create Event</NavLink>
          <NavLink to='/responses'style={{color:"#A02929",fontWeight:"400",textDecoration:"none",fontSize:21}}>View Responses</NavLink>
          <NavLink to='/loaupload' style={{color:"#A02929",fontWeight:"400",textDecoration:"none",fontSize:21}}>Upload LOA</NavLink>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
      <Routes>
      <Route path='/' element={<TeachCreate />} />
      <Route path='/responses' element={<Responses />} />
      <Route path='/loaupload' element={<UploadLOA />} />
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
    
    
  );
};

export default TeacherDashboard;
