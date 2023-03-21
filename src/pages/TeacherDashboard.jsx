import React from "react";
import Input from "../components/Input";

import somaiya from "../img/kjsieit-logo.svg"

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#cccccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </div>
  );
};

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
          <div>Create Event</div>
          <div>View Responses</div>
          <div>Upload LOA</div>
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
        <div
          style={{
            width: "80%",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start' }}>
                <b>Teacher Dashboard</b>
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Create Event
            </div>

            <div style={{height: 500, backgroundColor:"slateblue",margin:30}}>
                
            </div>

          <div>
            <button
              title="View More"
              style={{
                backgroundColor: "grey",
                width: "70%",
                border: 0,
                padding:1.5
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div>


            <label htmlFor="evname">Event Name</label>
            <Input placeholder="Workshop on AWS" id="evname" required/>

            <label htmlFor="desc">Description</label>
            <Input  id="desc"/>

            <label htmlFor="pre-skills">Preferred Skills</label>
            <Input placeholder="Frontend, DevOps, etc" id="pre-skills" required/>

                
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
