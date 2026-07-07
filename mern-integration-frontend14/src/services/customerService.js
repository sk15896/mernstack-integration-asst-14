import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCustomers = () =>
  axios.get(`${API}/customers`, authHeader());

export const getCustomer = (id) =>
  axios.get(`${API}/customers/${id}`, authHeader());

export const addCustomer = (data) =>
  axios.post(`${API}/customers`, data, authHeader());

export const updateCustomer = (id, data) =>
  axios.put(`${API}/customers/${id}`, data, authHeader());

export const deleteCustomer = (id) =>
  axios.delete(`${API}/customers/${id}`, authHeader());