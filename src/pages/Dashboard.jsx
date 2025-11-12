import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-hero">
      <img src="dash.jpg" alt="Faster Banner" className="dashboard-banner" />
      <div className="dashboard-text">
        <h1>Welcome to Faster</h1>
        <p>Build. Deploy. Scale — all at lightning speed.</p>
      </div>
    </div>
  );
}

export default Dashboard;
