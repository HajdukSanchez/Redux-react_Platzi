import axios from "axios";

// Is a function into another function
// The dispatch is going to generate the call when he was called to do a specific action
export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: "gave_users",
    payload: response.data,
  });
};
