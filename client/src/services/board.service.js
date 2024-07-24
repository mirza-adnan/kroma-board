import axios from "axios";
import baseURL from "../config/baseURL";

const createDefaultBoard = async (userID) => {
  try {
    const res = await axios.post(
      `${baseURL}/board/default`,
      { userID },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const getBoardsByID = async (userID) => {
  try {
    const res = await axios.get(`${baseURL}/board/${userID}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const createBoard = async (board) => {
  try {
    const res = await axios.post(`${baseURL}/board/create`, board, {
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const deleteBoardByID = async (boardID) => {
  try {
    const res = await axios.delete(`${baseURL}/board/${boardID}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const editBoardNameByID = async (boardID, name) => {
  try {
    const res = await axios.put(
      `${baseURL}/board/edit-name`,
      {
        boardID,
        name,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

export default {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
  editBoardNameByID,
};
