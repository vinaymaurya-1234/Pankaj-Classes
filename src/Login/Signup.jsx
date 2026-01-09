import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            localStorage.setItem("isLoggedIn", "true"); 

            alert(`Welcome, ${formData.name}! Your account has been created`);
            navigate("/courses");
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create an Account</h2>
                <p>Unlock the power of learning with Pankaj Classes 🚀</p>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>

                <div className="signup-footer">
                    <p>Already have an account? <a href="/login">Log In</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
