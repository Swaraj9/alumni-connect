import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";


const LetterOfAppreciation = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/sendLetterOfAppreciation", {
        email,
        message,
        subject: "Letter of Appreciation"
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
                <b>Upload LOA</b>
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

            {/* <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleEmailChange} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={handleMessageChange} />

            <button type="submit" onClick={handleSubmit}>Send Letter of Appreciation</button>
          </form> */}
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Alumni Name</div>
            <Input placeholder="Alumni Name" />
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Email Address</div>
            <Input type="email" id="email" name="email" onChange={handleEmailChange} placeholder="Email Address" />
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Message</div>
            <Input id="message" name="message" onChange={handleMessageChange} placeholder="Enter comments and feedback" />

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
            <button onClick={handleSubmit}
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

export default LetterOfAppreciation;
