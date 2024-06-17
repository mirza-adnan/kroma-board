import axios from "axios";
import baseURL from "../config/baseURL";

const getColors = async (userID, boardID) => {
  const res = await axios.get(`${baseURL}/color/${userID}/${boardID}`);
  return res.data;
};

const createColor = async (color) => {
  const res = await axios.post(`${baseURL}/color`, color);
  return res.data;
};

export default {
  getColors,
  createColor,
};
