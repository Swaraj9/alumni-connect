import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import { CgProfile } from 'react-icons/cg';
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


const Responses = () => {
  const [events, setEvents] = useState([]);
  useEffect(()=>{
    fetch('/responseevent/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(_events => {
      console.log(_events);
      setEvents(_events);
    })
    .catch(err => console.log(err));
  },[])

  return (
    <div
          style={{
            width: "80%",
            backgroundColor: "white",
            padding: "2rem",
            paddingTop:"0.5rem",
            borderRadius: "10px",
            marginLeft: "6rem" 
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Responses</b>
            </div>
            {/* <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div> */}
            {events && 
            events.map(event => 
              <Card>
              <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem",alignItems:"center",justifyContent: "center"}}>
                <CgProfile style={{width:80,height:80}} />
              </div>
              <div>
                  <div>{event.name}</div>
                  <div>Email: {event.email}</div>
                  <div>Event Name: {event.evename}</div>
              </div>
            
          </Card>
            )}


            {/* <Card>
                <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem",alignItems:"center",justifyContent: "center"}}>
                  <CgProfile style={{width:80,height:80}} />
                </div>
                <div>
                    <div>{event.name}</div>
                    <div>Email: {event.email}</div>
                </div>
              
            </Card>

            <Card>
            <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem",alignItems:"center",justifyContent: "center"}}>
                  <CgProfile style={{width:80,height:80}} />
                </div>
                <div>
                    <div>Bill</div>
                    <div>Skills: Python</div>
                    <div>Email: itisbill@gmail.com</div>
                </div>
              
            </Card>

            <Card>
            <div style={{backgroundColor:"white",marginRight:"2rem",borderRadius:50,width:"5rem",height:"5rem",alignItems:"center",justifyContent: "center"}}>
                  <CgProfile style={{width:80,height:80}} />
                </div>
                <div>
                    <div>Keanu</div>
                    <div>Skills: Cloud Computing</div>
                    <div>Email: kreevs@gmail.com</div>
                </div>
              
            </Card> */}

          
        </div>
  );
};

export default Responses;
