import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";

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

const EventEnd = () => {
  const [events, setEvents] = useState([]);

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

  const [pastevents, setPastEvents] = useState([]);
  useEffect(()=>{
    fetch('/pastevent/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(_pastevents => {
      console.log(_pastevents);
      setPastEvents(_pastevents);
    })
    .catch(err => console.log(err));
  },[])

  const defaultValues = {
    link: '',
    alumname: '',
    description: '',
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

  const addEventDetails = async(name) => {

    await fetch('/event/delete', {
      method: "POST",
      body: JSON.stringify({name}),
      headers : {
        'Content-Type': 'application/json'
      } 
    })
    .catch(err => console.log(err));

    const eventdet ={
      type:evetype,
      name:evename,
      alumname:eve.alumname,
      description:eve.description,
      from:frdate,
      to:todate,
      link:eve.link,
    }
    console.log(eventdet);
    fetch('/pastevent/create', {
      method: "post",
      body: JSON.stringify(eventdet),
      headers : {
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => data);
  }

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
            
            {/* <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"0.5rem" }}>Event Name</div>
            <Input placeholder="Event Name" /> */}
            <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Name</div>
                <select onChange={(e) => setName(e.target.value)} name="name" id="etype" style={{
                    
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    {events ? events.map((event)=>{
                      return <option value={event.name}> {event.name} </ option>;
                    }):null}
                </select>
            </form>
            <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Type</div>
                <select onChange={(e) => setType(e.target.value)} name="type" id="etype" style={{
                    
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
            </form>
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Host Name</div>
            <Input onChange={(e) => onValueChange(e)} name='alumname' placeholder="Alumni Name" />

            {/* <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Email Address</div>
            <Input placeholder="Email Address" /> */}

            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Summary</div>
            <Input onChange={(e) => onValueChange(e)} name='description' placeholder="Enter details here..." />
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Duration</div>
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
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Event Pictures & Videos</div>
            
            <div style={{display:"flex",alignItems:"center"}}>
                <div>
                <Input onChange={(e) => onValueChange(e)} name='link' id='drive_link' placeholder="Paste Drive Link..." />
                </div>
            </div>
            
            <div style={{display:'flex', marginTop:'2rem'}}> 
            <button onClick={() => addEventDetails(evename)}
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
            {/* <div>Past Events testing</div>
        {pastevents && 
            pastevents.map(pastevent => 
            <Card>
              <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
              <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
                <div>{pastevent.name}</div>
                <div><p >{pastevent.description}</p></div>
                <div>
                <div>{pastevent.from}</div>
                <div>{pastevent.to}</div>
                <div>Hosted By : {pastevent.alumname}</div>
                <div>{pastevent.link}</div>
                </div>
                <div>
                
                </div>
              </div>
            </Card>
            )} */}
        
          </div>
        </div>
  );
};

export default EventEnd;
