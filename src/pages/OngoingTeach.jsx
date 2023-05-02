import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import { TbHexagonNumber1,TbHexagonNumber2,TbHexagonNumber3 } from 'react-icons/tb';
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

const OngoingTeach = () => {
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
              <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
              <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
                <div>{event.name}</div>
                <div><p >{event.description}</p></div>
                <div>
                <div>{event.from}</div>
                <div>{event.to}</div>
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

          <Card>
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
          </Card>
          
        </div>
  );
};

export default OngoingTeach;
