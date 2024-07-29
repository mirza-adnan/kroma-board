import axios from "axios";
import baseURL from "../config/baseURL";

const saveUserToLocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const signup = async (info) => {
  const res = await axios.post(`${baseURL}/user/signup`, info, {
    withCredentials: true,
  });
  saveUserToLocal(res.data);
  return res.data;
};

const verifyUser = async (id) => {
  const res = await axios.get(`${baseURL}/user/verify/${id}`, {
    withCredentials: true,
  });
  saveUserToLocal(res.data);
  return res.data;
};

const login = async (info) => {
  const res = await axios.post(`${baseURL}/user/login`, info, {
    withCredentials: true,
  });
  saveUserToLocal(res.data);
  return res.data;
};

const logout = async () => {
  const res = await axios.get(`${baseURL}/user/logout`, {
    withCredentials: true,
  });
  localStorage.removeItem("user");
};

const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

const getFromLocal = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const removeFromLocal = () => {
  localStorage.removeItem("user");
};

export default {
  signup,
  verifyUser,
  login,
  logout,
  isLoggedIn,
  getFromLocal,
  removeFromLocal,
};
