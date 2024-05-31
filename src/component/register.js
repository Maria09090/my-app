import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        useState: "",
        password: "",
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/api/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);

        }
    };

    return( 
        <div>
            <h1>
                Register
            </h1>
            <form>
            <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            />
            <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            />
            <button onChange={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>
                Don't have an account? <Link to="/login">Login</Link>
            </span>
            </form>
        </div>
    );
};

export default Register;