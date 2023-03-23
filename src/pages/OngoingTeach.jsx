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

<Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
              {/* <div>
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
              </div> */}
            </div>
          </Card>

          <Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
              {/* <div>
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
              </div> */}
            </div>
          </Card>

          <Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
            <div style={{ flex: 3 ,marginTop:"0.8rem", fontSize:20}}>
              <div>EventName</div>
              <div><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deleniti non corporis eveniet laudantium modi distinctio iure quis praesentium natus aperiam exercitationem consequatur eaque provident eos, doloremque facere eligendi vel?</p></div>
              {/* <div>
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
              </div> */}
            </div>
          </Card>

          <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                <b>Suggeted Events</b>
          </div>

          <Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
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
                Approve
            </button>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
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
                Approve
            </button>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{  height:'100px', width:'100px', backgroundColor: 'var(--white)', borderRadius:'50rem', marginRight:'2rem', }}/>
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
                Approve
            </button>
              </div>
            </div>
          </Card>
          
        </div>
  );
};

export default OngoingTeach;
