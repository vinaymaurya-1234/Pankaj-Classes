import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import videosData from "./Videosdata";
import "./VideosPage.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const VideosPage = () => {
  const { courseName, className, subjectName } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  let videos = [];

  if (courseName === "SSC") {
    videos = videosData[courseName]?.[subjectName] || [];
  } else {
    videos = videosData[courseName]?.[className]?.[subjectName] || [];
  }

  const filteredVideos = videos.filter((video, index) =>
    `Video ${index + 1}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`videos-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="video-header">
        <h1>{subjectName} - Videos</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <div className="video-list">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, idx) => (
            <div key={idx} className="video-item">
              <iframe
                src={video}
                title={`${subjectName} Video ${idx + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p className="no-videos">No videos available for this subject.</p>
        )}
      </div>

      <Link to="/courses" className="back-btn">
        Back to Courses
      </Link>
    </div>
  );
};

export default VideosPage;
