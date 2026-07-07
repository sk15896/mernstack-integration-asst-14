import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers/add"
        element={
          <ProtectedRoute>
            <AddCustomer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers/edit/:id"
        element={
          <ProtectedRoute>
            <EditCustomer />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;