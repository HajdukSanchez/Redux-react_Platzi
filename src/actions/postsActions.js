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

export const fetchPostsByUser = (id) => async (dispatch, getState) => {
  // We get the list of the users
  const { users } = getState().usersReducers;
  // We get the id of a specific user
  const userId = users[id].id;
  dispatch({
    type: LOADING,
  });
  try {
    // We pass with param a specific user
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
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
