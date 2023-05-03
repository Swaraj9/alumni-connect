import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import { TbHexagonNumber1,TbHexagonNumber2,TbHexagonNumber3,TbHexagonNumber4 } from 'react-icons/tb';
import { BsFillHouseGearFill,BsPersonWorkspace } from 'react-icons/bs';
import { GrWorkshop } from 'react-icons/gr';
import { VscPerson } from 'react-icons/vsc';
import somaiya from "../img/kjsieit-logo.svg"

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#EBF5EE",
        padding: "1rem",
        borderRadius: "1.2rem",
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

const OngoingTeach = () => {
  const [events, setsEvents] = useState([]);

  const deleteEvent = (name) => {
    fetch('/suggestevent/delete', {
      method: "POST",
      body: JSON.stringify({name}),
      headers : {
        'Content-Type': 'application/json'
      } 
    })
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    fetch('/event/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(_events => {
      console.log(_events);
      setsEvents(_events);
    })
    .catch(err => console.log(err));
  },[])

  const [sevents, setEvents] = useState([]);
  useEffect(()=>{
    fetch('/suggestevent/get', {
      method: "GET",
    })
    .then(res => res.json())
    .then(_sevents => {
      console.log(_sevents);
      setEvents(_sevents);
    })
    .catch(err => console.log(err));
  },[])

  const setIcon = (type) => {
      if(type==="internship")
      {
        return <BsPersonWorkspace style={{width:100,height:100,color:"#3C4048"}} />
      }
      else if(type==="workshop")
      {
        return <BsFillHouseGearFill style={{width:100,height:100,color:"#3C4048"}} />
      }
      else if(type==="seminar")
      {
        return <GrWorkshop style={{width:100,height:100,color:"#3C4048"}} />
      }
      else
      {
        return <VscPerson style={{width:100,height:100,color:"#3C4048"}} />
      }
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
                <b>Ongoing Events</b>
            </div>
            {/* <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div> */}

{events && 
            events.map(event => 
            <Card>
              <div style={{  height:'8rem', width:'8rem', backgroundColor: 'var(--white)', borderRadius:'8rem', marginRight:'2rem',display:"flex",justifyContent:"center",alignItems:"center" }}>{setIcon(event.type)}</div>
              <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div style={{fontWeight:500,fontSize:"1.4rem"}}>{event.name}</div>
              <div><p >About Event: {event.description}</p></div>
              <div style={{display:"flex"}}>
                <div>{(new Date(event.from)).getFullYear()+"-"+((new Date(event.from)).getMonth()+1)+"-"+(new Date(event.from)).getDate()}</div>
                <div style={{marginLeft:"1rem",marginRight:"1rem"}}>to</div>
                <div>{(new Date(event.to)).getFullYear()+"-"+((new Date(event.to)).getMonth()+1)+"-"+(new Date(event.to)).getDate()}</div>
                </div>
                <div>
                {/* <button
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
              </button> */}
                </div>
              </div>
            </Card>
            )}

          <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Suggeted Events</b>
          </div>

          {sevents && 
            sevents.map(sevent => 
            <Card>
              <div style={{  height:'8rem', width:'8rem', backgroundColor: 'var(--white)', borderRadius:'8rem', marginRight:'2rem',display:"flex",justifyContent:"center",alignItems:"center" }}>{setIcon(sevent.type)}</div>
              <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
                <div style={{fontWeight:500,fontSize:"1.4rem"}}>{sevent.name}</div>
                <div><p >About Event: {sevent.description}</p></div>
                <div style={{display:"flex"}}>
                <div>{(new Date(sevent.from)).getFullYear()+"-"+((new Date(sevent.from)).getMonth()+1)+"-"+(new Date(sevent.from)).getDate()}</div>
                <div style={{marginLeft:"1rem",marginRight:"1rem"}}>to</div>
                <div>{(new Date(sevent.to)).getFullYear()+"-"+((new Date(sevent.to)).getMonth()+1)+"-"+(new Date(sevent.to)).getDate()}</div>
                </div>
                <div>
                <button
                  onClick={() => deleteEvent(sevent.name)}
                  style={{
                      minWidth: "200px",
                      border: "none",
                      backgroundColor: "var(--primary)",
                      padding: "0.5rem",
                      color: "var(--white)",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      marginRight:'1rem',
                      marginTop:"1rem"
                  }}
                  >
                  Approve
              </button>
                </div>
              </div>
            </Card>
            )}

          {/* <Card>
          <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}>
              <TbHexagonNumber1 style={{width:100,height:100}} />
            </div>            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>AzureCloud</div>
              <div><p >Learn Cloud Computing  -- Workshop</p></div>
              <div>
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
                Approve
            </button>
              </div>
            </div>
          </Card>

          <Card>
          <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}>
              <TbHexagonNumber2 style={{width:100,height:100}} />
            </div>            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
              <div>
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
                Approve
            </button>
              </div>
            </div>
          </Card>

          <Card>
          <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}>
              <TbHexagonNumber3 style={{width:100,height:100}} />
            </div>            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
              <div>
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
                Approve
            </button>
              </div>
            </div>
          </Card> */}
          
        </div>
  );
};

export default OngoingTeach;
