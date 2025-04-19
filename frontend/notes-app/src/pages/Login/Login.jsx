import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import "./login.css"; // Import the new CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

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