import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="team-container">
      <header className="team-header">
        <h1>
          Meet the <span>Pankaj Classes Team</span>
        </h1>
        <p>
          A passionate group of educators dedicated to helping students achieve their academic goals 
          with personalized guidance and innovative teaching methods.
        </p>
      </header>

      <section className="team-content">
        <h2>Why Our Team Stands Out?</h2>
        <p>
          At Pankaj Classes, we go beyond textbooks. Our teachers inspire students to think critically, 
          ask questions, and build confidence in their abilities.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team Members</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="T1.png" alt="Pankaj Kumar" />
            <h3>Pankaj Kumar</h3>
            <p>Founder & Lead Educator</p>
            <p>
              With years of experience, Pankaj Sir is committed to making learning an enjoyable and
              enriching experience for every student.
            </p>
          </div>

          <div className="team-card">
            <img src="T2.png" alt="Anjali Sharma" />
            <h3>Anjali Sharma</h3>
            <p>Mathematics Expert</p>
            <p>
              Anjali ma'am breaks down complex math concepts into simple, digestible parts, 
              helping students master the subject with ease.
            </p>
          </div>

          <div className="team-card">
            <img src="T3.png" alt="Ravi Verma" />
            <h3>Ravi Verma</h3>
            <p>Science Mentor</p>
            <p>
              Ravi sir’s interactive teaching style makes science fun and helps students understand 
              real-life applications of scientific concepts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
