import { useState } from "react";

import { registerUser } from "../services/authService";

import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await registerUser(form);

            alert("Registration Successful");

            navigate("/");

        }

        catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div className="auth-container">

            <form className="auth-form" onSubmit={handleSubmit}>

                <h2>Create Account</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />

                <button>

                    Register

                </button>

                <p>

                    Already Registered?

                    <Link to="/">

                        Login

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Register;