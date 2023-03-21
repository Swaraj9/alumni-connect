import React from "react";
import Input from "../components/Input";
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

const AlumniDashboard = () => {
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
          }}
        >
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Alumni Dashboard</b>
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start'  }}>
                Ongoing Events
            </div>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
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
                I'm Interested
            </button>
              </div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
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
                I'm Interested
            </button>
              </div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
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
                I'm Interested
            </button>
              </div>
            </div>
          </EventCard>

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
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Description</div>
            <Input placeholder="Enter Details" />
            
            <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Prefered Time Slot</div>
            <div style={{display:"flex",alignItems:"center"}}>
            <Input type="date" style={{
                width: "17rem",
                minWidth: "200px",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid grey",
                outline: "none",
                marginRight:"1rem",
            }} />
            <div>to</div>
            <Input type="date" style={{
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
      </div>
    </div>
  );
};

export default AlumniDashboard;
