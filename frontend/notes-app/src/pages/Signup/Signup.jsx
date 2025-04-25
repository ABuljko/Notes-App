import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import "./SignUp.css"; // Import the new CSS file

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Name cannot be empty.");
            return;
        }
        if (!email) {
            setError("Email cannot be empty.");
            return;
        }
        if (!password) {
            setError("Password cannot be empty.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Invalid email address.");
            return;
        }
        setError("");

        try {
            const response=await axiosInstance.post("/create-account", {
                fullName: name,
                email: email,
                password: password,
            });
            if(response.data && response.data.error){
                setError(response.data.message);
                return;
            }
            if(response.data && response.data.accessToken){
                localStorage.setItem("token", response.data.accessToken);
                navigate("/dashboard");
            }
        }catch (error){
            if(error.response && error.response.data && error.response.data.message){
                setError(error.response.data.message); 
        }else{
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="signup-page">
                <div className="signup-card">
                    <form onSubmit={handleSignUp}>
                        <h2 className="signup-title">Create Account</h2>
                        <p className="signup-subtitle">Join us and start your journey</p>

                        <input
                            type="text"
                            placeholder="Name"
                            className="signup-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            className="signup-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="signup-input"
                        />

                        {error && <p className="signup-error">{error}</p>}

                        <button type="submit" className="signup-button">
                            Create Account
                        </button>

                        <p className="signup-footer">
                            Already have an account?{" "}
                            <Link to="/login" className="signup-link">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;