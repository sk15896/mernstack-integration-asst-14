import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    }

    return (

        <nav className="navbar">

            <h2>CRM</h2>

            <div>

                <Link to="/dashboard">Dashboard</Link>

                <Link to="/customers">Customers</Link>

                <button onClick={logout}>Logout</button>

            </div>

        </nav>

    )

}

export default Navbar;