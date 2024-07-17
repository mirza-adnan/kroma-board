import axios from "axios";
import baseURL from "../config/baseURL";

const createDefaultBoard = async (userID) => {
  try {
    const res = await axios.post(`${baseURL}/board/default`, { userID });
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const getBoardsByID = async (userID) => {
  try {
    const res = await axios.get(`${baseURL}/board/${userID}`);
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const createBoard = async (board) => {
  try {
    const res = await axios.post(`${baseURL}/board/create`, board);
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const deleteBoardByID = async (boardID) => {
  try {
    const res = await axios.delete(`${baseURL}/board/${boardID}`);
    return res;
  } catch (e) {
    console.log(e.response.data);
  }
};

export default {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
};
