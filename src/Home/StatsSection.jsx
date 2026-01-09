import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stats-left" data-aos="fade-right">
        <h1>Start learning with Pankaj Classes</h1>
        <p>Get unlimited access to structured courses & doubt clearing sessions</p>
        <button className="start-btn">Start learning</button>
      </div>

      <div className="stats-right" data-aos="fade-left">
        <div className="stats-grid">
          <div className="stat-pair">
            <div className="stat-card">
              <h3>Educators</h3>
              <p><span>20+</span></p>
            </div>
            <div className="stat-card">
              <h3>Total Student Enrolled</h3>
              <p><span>2000+</span></p>
            </div>
          </div>

          <div className="stat-pair">
            <div className="stat-card">
              <h3>Weekly Tests</h3>
              <p><span>20+</span></p>
            </div>
            <div className="stat-card">
              <h3>Study Materials</h3>
              <p><span>1.5k+</span></p>
            </div>
          </div>

          <div className="stat-pair">
            <div className="stat-card">
              <h3>Parents - Teacher Meetings</h3>
              <p><span>50+</span></p>
            </div>
            <div className="stat-card">
              <h3>Doubt Sessions</h3>
              <p><span>50+</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;