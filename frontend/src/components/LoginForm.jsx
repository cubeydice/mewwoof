import { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import '../styles/LoginForm.css'

// eslint-disable-next-line react/prop-types
function LoginForm({ route, method, setLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    useEffect(() => {}, [errors]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                setLoggedIn(true);
                setErrors({});
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            setErrors(error.response.data);
            console.log(errors)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            {errors && <span className="errors">{errors.username}</span>}
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {errors && <span className="errors">{errors.password}</span>}
            {errors && <span className="errors">{errors.detail}</span>}
            <button className="form-button" type="submit">
                {name}
            </button>
            {// eslint-disable-next-line react/no-unescaped-entities
            method === "login" ? <p>Don't have an account? <Link to={'/register'}>Register</Link></p> : <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            }
        </form>
    );
};

export default LoginForm;