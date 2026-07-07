import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>CRM</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/customers">Customers</Link>

      <Link to="/customers/add">
        Add Customer
      </Link>

    </div>
  );
}

export default Sidebar;