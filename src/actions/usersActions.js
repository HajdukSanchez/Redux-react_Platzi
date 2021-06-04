import axios from "axios";
import { ALL_USERS } from "../types/usersTypes";

// Is a function into another function
// The dispatch is going to generate the call when he was called to do a specific action
export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: ALL_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};
