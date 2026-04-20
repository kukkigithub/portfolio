import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Results-driven Data Analyst with hands-on expertise in SQL, Python, Power BI, and ETL pipeline development. Experienced in A/B testing, hypothesis testing, stakeholder management, and cross-functional collaboration within Agile environments. Proven ability to deliver data governance frameworks, regression analysis, and KPI dashboards that drive measurable business impact. Seeking to apply data storytelling and business intelligence skills to solve complex analytical challenges at scale.
        </p>
        
        <h3 className="title" style={{ marginTop: "40px" }}>Certifications</h3>
        <ul className="cert-list">
          <li>IBM Data Analyst Professional Certificate</li>
          <li>IBM Machine Learning Professional Certificate</li>
          <li>Mastering Big Data Analytics with PySpark</li>
          <li>Microsoft Data Analyst Career Path</li>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
