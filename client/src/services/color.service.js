import axios from "axios";
import baseURL from "../config/baseURL";

const getColorsByID = async (userID, boardID) => {
  const res = await axios.get(`${baseURL}/color/${userID}/${boardID}`);
  return res.data;
};

const getAllColors = async (userID) => {
  const res = await axios.get(`${baseURL}/color/${userID}`);
  return res.data;
};

const createColor = async (color) => {
  const res = await axios.post(`${baseURL}/color`, color);
  return res.data;
};

export default {
  getColorsByID,
  getAllColors,
  createColor,
};
