import { useState } from "react";

import { addCustomer } from "../services/customerService";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function AddCustomer() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

        email: "",

        phone: "",

        company: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        await addCustomer(form);

        alert("Customer Added");

        navigate("/customers");

    }

    return (

        <>

            <Navbar />

            <div className="container">

                <h2>Add Customer</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="company"
                        placeholder="Company"
                        onChange={handleChange}
                        required
                    />

                    <button className="btn">

                        Save

                    </button>

                </form>

            </div>

        </>

    )

}

export default AddCustomer;