import React from "react";
import "./Achievements.css";

function Achievements() {
    return (
        <>
            <section id="achievements" data-aos="fade-up">
                <h2>Our Achievements</h2>

                <div className="achievement-grid">
                    <div className="achievement-card" data-aos="zoom-in" data-aos-delay="100">
                        <img src="/Stdg1.jpg" alt="Student 1" />
                        <h3>Priya Sharma</h3>
                        <p>95% in Class 12 (2024)</p>
                        <span>Top Scorer in Science Stream</span>
                    </div>

                    <div className="achievement-card" data-aos="zoom-in" data-aos-delay="200">
                        <img src="/Std2.jpg" alt="Student 2" />
                        <h3>Amit Verma</h3>
                        <p>Cleared CA Foundation</p>
                        <span>1st Attempt, 2023</span>
                    </div>

                    <div className="achievement-card" data-aos="zoom-in" data-aos-delay="300">
                        <img src="/Stdg2.jpeg" alt="Student 3" />
                        <h3>Riya Gupta</h3>
                        <p>92% in Class 10 (2024)</p>
                        <span>Highest Marks in Mathematics</span>
                    </div>

                    <div className="achievement-card" data-aos="zoom-in" data-aos-delay="400">
                        <img src="/Std1.jpg" alt="Student 4" />
                        <h3>Ankit Sharma</h3>
                        <p>B.Tech, IIT Delhi</p>
                        <span>Alumni Success Story</span>
                    </div>
                </div>

                <div className="testimonials" data-aos="fade-up">
                    <h3>What Our Students Say</h3>
                    <blockquote>
                        "Pankaj Classes helped me excel in my board exams. The personalized attention and regular tests made a huge difference!"
                        <cite>— Sneha Patel, Class 12 (2024)</cite>
                    </blockquote>
                </div>
            </section>
        </>
    );
}

export default Achievements;