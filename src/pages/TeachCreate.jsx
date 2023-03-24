import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import { RxUpload } from 'react-icons/rx';
import somaiya from "../img/kjsieit-logo.svg"


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


const TeachCreate = () => {
  const defaultValues = {
    name: '',
    desc: '',
    skill: '',
  }
  const [eve,setUser]=useState(defaultValues);
  const onValueChange = (e) =>{
    setUser({...eve,[e.target.name]: e.target.value})
}
  const addEventDetails = () => {

  }
  return (
    <div
          style={{
            width: "80%",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
            marginLeft: "6rem" 
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start' }}>
                <b>Teacher Dashboard</b>
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Proposed Event
            </div>

          {/* <div>
            <button
              title="View More"
              style={{
                backgroundColor: "grey",
                width: "70%",
                border: 0,
                padding:1.5
              }}
            /> */}
          {/* </div> */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {/* <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div> */}


            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Type</div>
            <select  name="Event Type" id="evntype" style={{
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Event Type</option>
                    <option value="intern">Internship</option>
                    <option value="works">Workshop</option>
                    <option value="semi">Seminar</option>
                    <option value="mentor">Mentorship</option>
            </select>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Name</div>
            <Inputt onChange={(e) => onValueChange(e)} name='name' placeholder="Workshop on AWS" id="evname" required/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Description</div>
            <Inputt onChange={(e) => onValueChange(e)} name='desc' id="desc"/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Preferred Skills</div>
            <Inputt onChange={(e) => onValueChange(e)} name='skill' placeholder="Frontend, DevOps, etc" id="pre-skills" required/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Prefered Time Slot</div>
            <div style={{display:"flex",alignItems:"center"}}>
            <Inputt type="date" style={{
                width: "17rem",
                minWidth: "200px",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid grey",
                outline: "none",
                marginRight:"1rem",
            }} />
            <div>to</div>
            <Inputt type="date" style={{
                width: "17rem",
                minWidth: "200px",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid grey",
                outline: "none",
                marginLeft:"1rem",
            }} />
            </div>
            <div style={{display:'flex', marginTop:'2rem'}}> 
            <button onClick={() => addEventDetails()}
                style={{
                    minWidth: "200px",
                    border: "none",
                    backgroundColor: "var(--primary)",
                    padding: "0.5rem",
                    color: "var(--white)",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    marginRight:'1rem'
                }}
                >
                Submit
            </button>
            {/* <button
                style={{
                    minWidth: "200px",
                    border: "none",
                    backgroundColor: "var(--primary)",
                    padding: "0.5rem",
                    color: "var(--white)",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    marginLeft:'1rem'
                }}
                >
                Reset
            </button> */}

        </div>
                
          </div>
        </div>
  );
};

export default TeachCreate;
