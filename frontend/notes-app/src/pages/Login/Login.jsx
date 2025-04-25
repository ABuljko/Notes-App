import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import "./login.css"; // Import the new CSS file
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Invalid email address.");
            return;
        }
        if (!password) {
            setError("Password cannot be empty.");
            return;
        }

        setError("");

        try {
            const response=await axiosInstance.post("/auth/login", {
                email: email,
                password: password,
            });
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
            <div className="login-page">
                <div className="login-card">
                    <form onSubmit={handleLogin}>
                        <h2 className="login-title">Welcome Back</h2>
                        <p className="login-subtitle">Please log in to your account</p>

                        <input
                            type="text"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />

                        {error && <p className="login-error">{error}</p>}

                        <button type="submit" className="login-button">
                            Login
                        </button>

                        <p className="login-footer">
                            Don't have an account?{" "}
                            <Link to="/signUp" className="login-link">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;