import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Dashboard</h1>

                <br />

                <Link className="btn" to="/customers">

                    View Customers

                </Link>

            </div>

        </>

    )

}

export default Dashboard;