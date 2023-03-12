import React from "react";

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
        }}
      >
        <div style={{ width: "10%" }}>Logo</div>
        <div>past events</div>
        <div>check rating</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "var(--primaryD)",
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
            <div style={{ marginBottom: "1.5rem", fontSize:'2.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Admin Dashboard
            </div>
            <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
                Leaderboard
            </div>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 }}>
              <div>EventName</div>
              <div>Details</div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 }}>
              <div>EventName</div>
              <div>Details</div>
            </div>
          </EventCard>

          <EventCard>
            <div style={{ flex: 1, height:'200px', width:'200px', backgroundColor: 'var(--white)', borderRadius:'5px', marginRight:'2rem' }}/>
            <div style={{ flex: 3 }}>
              <div>EventName</div>
              <div>Details</div>
            </div>
          </EventCard>

          <div>
            <button
              title="View More"
              style={{
                backgroundColor: "red",
                width: "10%",
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
              <div>AlumniName</div>
              <div>Details</div>
              <div>Rating</div>
            </Card>
            <Card>
              <div>AlumniName</div>
              <div>Details</div>
              <div>Rating</div>
            </Card>
            <Card>
              <div>AlumniName</div>
              <div>Details</div>
              <div>Rating</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
