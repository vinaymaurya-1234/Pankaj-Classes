import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Header.css";

function MainHeader() {
  const [dynamicGreeting, setDynamicGreeting] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setDynamicGreeting("Hey! Good Morning, ready to ace your studies?");
    } else if (currentHour < 18) {
      setDynamicGreeting("Good Afternoon! Let’s crush those learning goals.");
    } else {
      setDynamicGreeting("Good Evening! Time to wind down with some knowledge.");
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuth = async () => {
    if (isLoggedIn) {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo" title="Welcome to Pankaj Classes 🚀">
          Pankaj Classes
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/aboutus"> About</Link>
          </li>
          <li>
            <Link to="/courses"> Courses</Link>
          </li>
          <li>
            <Link to="/admission"> Admission</Link>
          </li>
          <li>
            <Link to="/contactus"> Contact</Link>
          </li>
        </ul>
        <button className="login-btn" onClick={handleAuth} title={dynamicGreeting}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
}

export default MainHeader;