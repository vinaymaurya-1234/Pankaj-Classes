import React from "react";
import "./features_sec.css";

const Features_sec = () => {
  return (
    <div className="features-section">
      <div className="feature-card blue-bg" data-aos="fade-up">
        <img src="/offlinecls.png" alt="Daily Classes" />
        <h3>Daily Classes</h3>
        <p>
          Learn in a focused classroom environment with experienced teachers
          guiding you every step of the way. Get personalized attention, clear
          your doubts instantly, and study with like-minded peers for a better
          learning experience!
        </p>
      </div>

      <div className="feature-card red-bg" data-aos="fade-up" data-aos-delay="200">
        <img src="/P&R.png" alt="Weekly Tests" />
        <h3>Weekly Tests</h3>
        <p>
          Track your progress with regular tests designed to strengthen your
          concepts and boost exam confidence. Get detailed feedback and
          understand your improvement areas to stay ahead in your studies!
        </p>
      </div>

      <div className="feature-card yellow-bg" data-aos="fade-up" data-aos-delay="400">
        <img src="/learnn.png" alt="Learn Anytime Anywhere" />
        <h3>Learn anytime, anywhere</h3>
        <p>
        "Access all our recorded classes anytime, anywhere—learn at your own pace on any device!"
        </p>
      </div>
    </div>
  );
};

export default Features_sec;
