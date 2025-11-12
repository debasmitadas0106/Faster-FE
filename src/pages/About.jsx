import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Faster 🚀</h1>
        <p>
          Faster is a forward-thinking tech company committed to building
          scalable, high-performance web solutions. We focus on simplifying
          complex systems through clean architecture, automation, and modern
          design principles.
        </p>
        <p>
          Our mission is to empower businesses with cutting-edge technology that
          enhances productivity, drives innovation, and scales effortlessly as
          they grow. We believe in a fast, focused, and flexible approach to
          problem-solving — because speed without stability is not real
          progress.
        </p>
        <p>
          Since our founding, our team has worked tirelessly to create tools and
          systems that make digital transformation simpler and more efficient.
          With a culture built on collaboration, innovation, and integrity, we
          aim to make technology faster — for everyone.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Core Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img src="cto.jpg" alt="Founder & CTO" className="team-photo" />
            <h3>Debasmita Das</h3>
            <p className="team-role">Founder & CTO</p>
            <p className="team-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis tellus ut libero bibendum, ut tempor magna varius.
            </p>
          </div>

          <div className="team-card">
            <img src="ceo.jpg" alt="Co-Founder & CEO" className="team-photo" />
            <h3>John Doe</h3>
            <p className="team-role">Co-Founder & CEO</p>
            <p className="team-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis tellus ut libero bibendum, ut tempor magna varius.
            </p>
          </div>

          <div className="team-card">
            <img src="hr.jpg" alt="HR Head" className="team-photo" />
            <h3>Edith Riordan</h3>
            <p className="team-role">Head of Human Resources</p>
            <p className="team-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis tellus ut libero bibendum, ut tempor magna varius.
            </p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>
          📧 Reach us at{" "}
          <a href="mailto:developers@fasterfrontend.fun">
            developers@fasterfrontend.fun
          </a>
        </p>
      </footer>
    </div>
  );
}

export default About;
