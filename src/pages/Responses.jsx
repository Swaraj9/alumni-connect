import React from "react";
import Input from "../components/Input";
import { RxUpload } from 'react-icons/rx';
import somaiya from "../img/kjsieit-logo.svg"

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#cccccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1.5rem",
        display:"flex",
        alignItems:"center"
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
        padding: "1.2rem",
        borderRadius: "10px",
        marginBottom: "1.5rem",
        display:'flex'
      }}
    >
      {children}
    </div>
  );
};

const Responses = () => {
  return (
    <div
          style={{
            width: "80%",
            backgroundColor: "white",
            padding: "2rem",
            paddingTop:"0.5rem",
            borderRadius: "10px",
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Responses</b>
            </div>
            {/* <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div> */}

            <Card>
                <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem"}}>
                </div>
                <div>
                    <div>AlumniName</div>
                    <div>Details</div>
                    <div>Rating</div>
                </div>
              
            </Card>

            <Card>
                <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem"}}>
                </div>
                <div>
                    <div>AlumniName</div>
                    <div>Details</div>
                    <div>Rating</div>
                </div>
              
            </Card>

            <Card>
                <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem"}}>
                </div>
                <div>
                    <div>AlumniName</div>
                    <div>Details</div>
                    <div>Rating</div>
                </div>
              
            </Card>

          
        </div>
  );
};

export default Responses;
