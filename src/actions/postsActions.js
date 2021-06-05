import axios from "axios";
import { ALL_POSTS_BY_USER, LOADING, ERROR } from "../types/postsTypes";
import * as usersTypes from "../types/postsTypes";

const { ALL_USERS: gaveAllUsers } = usersTypes;

export const fetchPostsByUser = (id) => async (dispatch, getState) => {
  // We get the list of the users
  const { users } = getState().usersReducers;
  // We get all the posts that we have
  const { posts } = getState().postsReducers;
  // We get the id of a specific user
  const userId = users[id].id;
  dispatch({
    type: LOADING,
  });
  try {
    // We pass with param a specific user
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    // We don't overwrite the posts, we added to the array
    const postsNews = [...posts, response.data];
    // latest array of posts
    const latestPosts = postsNews.length - 1;
    // We gave the latests array of posts
    const usersNews = [...users];
    usersNews[userLatest] = {
      ...users[userLatest],
      latestPosts,
    };
    dispatch({
      type: gaveAllUsers,
      payload: usersNews,
    });
    dispatch({
      type: ALL_POSTS_BY_USER,
      payload: postsNews,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
