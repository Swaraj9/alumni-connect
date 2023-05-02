import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";
import somaiya from "../img/kjsieit-logo.svg"
import AuthServices from "../services/AuthService";

const Card = ({ children }) => {
  return (
    <div
      style={{
        display:"flex",
        alignItems:"center",
        backgroundColor: "#cccccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1.5rem",
        paddingBottom:"2rem"
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

const AlumniDashboard = () => {

  const {user, setUser, setIsAuthenticated} = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  const onClickLogoutHandler = () => {
    AuthServices.logout().then(data => {
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false);
      }
    })
  }

  useEffect(()=>{
    fetch('/event/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(_events => {
      console.log(_events);
      setEvents(_events);
    })
    .catch(err => console.log(err));
  },[])
  const defaultValues = {
    name: '',
    description: '',
    skills: '',
  }
  const [eve,setEvent]=useState(defaultValues);
  const [evename,setName]=useState("");
  const [evetype,setType]=useState("");
  const [frdate,setFromDate]=useState();
  const [todate,setToDate]=useState();

  const onValueChange = (e) =>{
    setEvent({...eve,[e.target.name]: e.target.value})
    console.log(eve);
  }


  const addEventDetails = () => {
    const eventdet ={
      type:evetype,
      name:eve.name,
      description:eve.description,
      skills:eve.skills,
      from:frdate,
      to:todate,
    }
    fetch('/suggestevent/create', {
      method: "post",
      body: JSON.stringify(eventdet),
      headers : {
          'Content-Type': 'application/json'
      }
  }).then(res => res.json())
    .then(data => data);
  }

  const addResponseDetails = () => {
    const resdet ={
      name:user.username,
      email:user.email,
      evename:evename
    }
    console.log(resdet);
    fetch('/responseevent/create', {
      method: "post",
      body: JSON.stringify(resdet),
      headers : {
          'Content-Type': 'application/json'
      }
  }).then(res => res.json())
    .then(data => data);
  }
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
          {/* <div>Past Events</div>
          <div>Check Rating</div> */}

          <div
            style={{
              position: "relative",
              left: "43rem"
            }}
          >
            <button
                  style={{
                      minWidth: "120px",
                      border: "none",
                      backgroundColor: "var(--primary)",
                      padding: "0.5rem",
                      color: "var(--white)",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      marginLeft:'15rem',

                  }}
                  onClick={onClickLogoutHandler}
                  >
                  LOGOUT
              </button>
          </div>

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
            paddingTop:"0.5rem",
            borderRadius: "10px",
            marginLeft: "6rem" 
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Alumni Dashboard</b>
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start'  }}>
                Ongoing Events
            </div>

            {events && 
            events.map(event => 
            <Card>
              <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
              <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
                <div>{event.name}</div>
                <div><p >{event.description}</p></div>
                <div>
                <button onClick={() => {
                setName(event.name)
                addResponseDetails()}}
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
                  I'm Interested
              </button>
                </div>
              </div>
            </Card>
            )}

          {/* <div>
            <button
              title="View More"
              style={{
                backgroundColor: "red",
                width: "50%",
                border: 0,
                padding:1.5
              }}
            />
          </div> */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div style={{ marginBottom: "1.0rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Suggest Events
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
            <select onChange={(e) => setType(e.target.value)} name="type" style={{
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Event Type</option>
                    <option value="internship">Internship</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="mentorship">Mentorship</option>
            </select>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Name</div>
            <Input onChange={(e) => onValueChange(e)} name='name' placeholder="Workshop on AWS" id="evname" required/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Description</div>
            <Input onChange={(e) => onValueChange(e)} name='description' id="desc"/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Preferred Skills</div>
            <Input onChange={(e) => onValueChange(e)} name='skills' placeholder="Frontend, DevOps, etc" id="pre-skills" required/>

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Prefered Time Slot</div>
            <div style={{display:"flex",alignItems:"center"}}>
            <Input onChange={(e) => setFromDate(e.target.value)} name='from' type="date" style={{
                width: "17rem",
                minWidth: "200px",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid grey",
                outline: "none",
                marginRight:"1rem",
            }} />
            <div>to</div>
            <Input onChange={(e) => setToDate(e.target.value)} name='to' type="date" style={{
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
            </div>
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
      </div>
    </div>
  );
};

export default AlumniDashboard;
