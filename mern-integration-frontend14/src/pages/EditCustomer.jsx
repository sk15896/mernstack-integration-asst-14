import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCustomer, updateCustomer } from "../services/customerService";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    let isMounted = true;

    const loadCustomer = async () => {
      try {
        const res = await getCustomer(id);

        if (isMounted) {
          setForm(res.data);
        }
      } catch {
        alert("Unable to load customer");
      }
    };

    loadCustomer();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCustomer(id, form);
      alert("Customer Updated Successfully");
      navigate("/customers");
    } catch {
      alert("Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <h2>Edit Customer</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />

          <button className="btn">
            Update Customer
          </button>

        </form>

      </div>
    </>
  );
}

export default EditCustomer;
