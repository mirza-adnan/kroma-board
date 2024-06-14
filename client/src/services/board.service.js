import axios from "axios";
import baseURL from "../config/baseURL";

const createDefaultBoard = async (userID) => {
  const res = await axios.post(`${baseURL}/board/default`, { userID });
  return res.data;
};

const getBoardsByID = async (userID) => {
  const res = await axios.get(`${baseURL}/board/${userID}`);
  return res.data;
};

export default { createDefaultBoard, getBoardsByID };
