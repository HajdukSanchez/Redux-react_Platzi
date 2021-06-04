import axios from "axios";
import { ALL_USERS, LOADING, ERROR } from "../types/usersTypes";

// Is a function into another function
// The dispatch is going to generate the call when he was called to do a specific action
export const fetchUsers = () => async (dispatch) => {
  // Dispatch communicate with the reducer
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: ALL_USERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
