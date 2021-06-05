import axios from "axios";
import { ALL_POSTS, LOADING, ERROR } from "../types/postsTypes";

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: ALL_POSTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
