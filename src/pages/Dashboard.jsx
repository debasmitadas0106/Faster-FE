import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Hero Banner */}
      <div className="dashboard-hero">
        <img
          src="dash.jpg" // replace with your image
          alt="Faster Banner"
          className="dashboard-banner"
        />
        <div className="overlay"></div>
        <div className="hero-text">
          <h3>Welcome to Faster 🚀</h3>
          <p>We build fast and reliable software solutions.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard-content">
        <h2>Our Mission</h2>
        <p>
          At Faster, we focus on delivering robust, scalable, and
          high-performance applications that help businesses move at lightning
          speed. Our team of developers and designers work together to bring
          your ideas to life.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
