import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="dashboard-hero">
        <img src="dash.jpg" alt="Faster Banner" className="dashboard-banner" />
        <div className="dashboard-text">
          <h1>Welcome to Faster</h1>
          <p>Build. Deploy. Scale — all at lightning speed.</p>
        </div>
      </div>

      {/* Feature Section */}
      <section className="features-section">
        <h2>Why Choose Faster?</h2>
        <p className="features-subtitle">
          We help you move from idea to deployment — efficiently, securely, and
          with modern tech.
        </p>

        <div className="feature-cards">
          <div className="feature-card">
            <img src="speed.jpg" alt="Speed" />
            <h3>Lightning Speed</h3>
            <p>
              Deliver projects faster with optimized systems, automated builds,
              and efficient workflows.
            </p>
          </div>

          <div className="feature-card">
            <img src="scale.jpg" alt="Scalability" />
            <h3>Built to Scale</h3>
            <p>
              Our solutions grow with your business — ensuring smooth
              performance even at scale.
            </p>
          </div>

          <div className="feature-card">
            <img src="support.jpg" alt="Support" />
            <h3>Expert Support</h3>
            <p>
              Get end-to-end guidance from our engineers at every step of your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>
          Ready to go faster? Contact us at{" "}
          <a href="mailto:developers@fasterfrontend.fun">
            developers@fasterfrontend.fun
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
