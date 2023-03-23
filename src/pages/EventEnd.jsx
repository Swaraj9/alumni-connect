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

const EventEnd = () => {
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
                <b>EventEnd</b>
            </div>
            

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {/* <div style={{ marginBottom: "1.0rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Suggest Events
            </div> */}
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Name</div>
            <Input placeholder="Event Name" />
            <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Type</div>
                <select name="Event Type" id="etype" style={{
                    
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
            </form>
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Alumni Name</div>
            <Input placeholder="Alumni Name" />
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Email Address</div>
            <Input placeholder="Email Address" />
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>LOA Upload</div>
            
            <div style={{display:"flex",alignItems:"center"}}>
                <div>
                <Input id='browse' type='file' />
                </div>
                
                {/* <div>
                <label for='browse'
                style={{
                    minWidth: "200px",
                    border: "none",
                    backgroundColor: "var(--primary)",
                    padding: "0.5rem",
                    paddingLeft:"1.5rem",
                    paddingRight:"1.5rem",
                    color: "var(--white)",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    marginRight:'1rem'
                }}
                >
                Browse
                <RxUpload style={{
                    marginLeft:"1rem",
                    width:16,
                    height:16,
                }}/>
            </label>
                </div> */}
            </div>
            
            <div style={{display:'flex', marginTop:'2rem'}}> 
            <button
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
            <button
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
            </button>

        </div>
          </div>
        </div>
  );
};

export default EventEnd;
