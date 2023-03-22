import React from "react";

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

const AdminDashboard = () => {
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
          <div>Past Events</div>
          <div>Check Rating</div>

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
                      marginLeft:'1rem',

                  }}
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
            borderRadius: "10px",
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Admin Dashboard</b>
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Past Events
            </div>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"30px", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"30px", fontSize:20}}>
              <div>EventName</div>
              <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"30px", fontSize:20}}>
              <div>EventName</div>
              <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
            </div>
          </EventCard>

          <div>
            <button
              title="View More"
              style={{
                backgroundColor: "red",
                width: "50%",
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
