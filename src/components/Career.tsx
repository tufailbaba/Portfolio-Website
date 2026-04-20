import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Information Technology</h4>
                <h5>Govt Degree College Baramulla</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Joined B.Sc. in Information Technology at Govt Degree College
              Baramulla. Studying software development, database management,
              and web technologies. Expected graduation in 2026.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Development</h4>
                <h5>Ruby on Rails</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Currently improving backend development skills in Ruby on Rails
              including ActiveRecord ORM, database design, authentication
              systems, and REST APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Continuous Learning</h4>
                <h5>Full Stack Skills</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expanding skills in React, MongoDB, and full-stack development
              while building real-world projects like an Airbnb Clone and
              Student Management System.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
