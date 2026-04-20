import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Data Science</h4>
                <h5>Bennett University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Relevant Coursework: Data Analysis, Machine Learning, Statistics, Data Structures, Data Warehousing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Independent Analytics Consultant</h5>
              </div>
              <h3>2023 - NOW</h3>
            </div>
            <p>
              Led end-to-end stakeholder management for 3 analytics projects, translating ambiguous business requirements into measurable KPI frameworks and reducing reporting turnaround by 25%. Architected scalable ETL pipelines using Python and REST APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
