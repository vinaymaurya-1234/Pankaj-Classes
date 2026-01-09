import React, { useState } from "react";
import "./Mycontent.css";
import { useNavigate } from "react-router-dom";

const Mycontent = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState("11th");
  const navigate = useNavigate();

  const courses = {
    SSC: ["English","Hindi","Marathi", "Science", "Maths", "History","Geography"],
    Science: ["Physics", "Chemistry", "Mathematics", "Biology","English", "IT"],
    Commerce: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
  };

  return (
    <div className="courses-page">
      <h1 className="heading">Explore Our Courses</h1>
      <div className="course-container">
        {Object.keys(courses).map((course) => (
          <div
            key={course}
            className="course-box"
            onClick={() => setSelectedCourse(course)}
          >
            {course}
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="subject-list">
          <h2>{selectedCourse} Subjects:</h2>

          {(selectedCourse === "Science" || selectedCourse === "Commerce") && (
            <div className="class-select">
              <label>Select Class:</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>
          )}

          <ul>
            {courses[selectedCourse].map((subject, index) => (
              <li
                key={index}
                onClick={() => {
                  if (selectedCourse === "SSC") {
                    navigate(`/videos/${selectedCourse}/${subject}`);
                  } else {
                    navigate(
                      `/videos/${selectedCourse}/${selectedClass}/${subject}`
                    );
                  }
                }}
                className="text-blue-700 underline cursor-pointer"
              >
                {subject}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mycontent;
