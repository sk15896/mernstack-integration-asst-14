import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import CustomerTable from "../components/CustomerTable";

import { Link } from "react-router-dom";


import {

    getCustomers,

    deleteCustomer

} from "../services/customerService";

function Customers() {
    const [search, setSearch] = useState("");

    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {

        const res = await getCustomers();

        setCustomers(res.data);

    }

    useEffect(() => {
        let isMounted = true;

        const fetchCustomers = async () => {
            const res = await getCustomers();

            if (isMounted) {
                setCustomers(res.data);
            }
        };

        fetchCustomers();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleDelete = async (id) => {

        await deleteCustomer(id);

        loadCustomers();

    }

    return (

        <>

            <Navbar />

            <div className="container">

                <h2>Customers</h2>

                <br />

                <Link className="btn" to="/customers/add">

                    Add Customer

                </Link>

                <br /><br />

                <input
                    className="searchBox"
                    type="text"
                    placeholder="Search Customer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <CustomerTable
                    customers={customers.filter((customer) =>
                        `${customer.name} ${customer.email} ${customer.phone} ${customer.company}`
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )}

                    onDelete={handleDelete}

                />

            </div>

        </>

    )

}
export default Customers;
