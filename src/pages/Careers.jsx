import "./Careers.css";

function Careers() {
  const jobs = [
    { title: "Frontend Developer", dept: "Engineering", location: "Bengaluru" },
    { title: "Backend Developer", dept: "Engineering", location: "Bengaluru" },
    { title: "DevOps Engineer", dept: "Engineering", location: "Bengaluru" },
    { title: "Sales Executive", dept: "Sales", location: "Bengaluru" },
    { title: "Marketing Associate", dept: "Marketing", location: "Bengaluru" },
    { title: "HR Coordinator", dept: "Human Resources", location: "Bengaluru" },
  ];

  return (
    <div className="careers-page">
      <h1>Careers at Faster 🚀</h1>
      <p className="careers-subtitle">
        Join our growing team and help us build the future of technology.
      </p>

      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>
                <strong>Department:</strong> {job.dept} <br />
                <strong>Location:</strong> {job.location}
              </p>
            </div>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
