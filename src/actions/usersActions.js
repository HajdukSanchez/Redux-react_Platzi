// Is a function into another function
// The dispatch is going to generate the call when he was called to do a specific action
export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: "gave_users",
    payload: [1, 2, 3],
  });
};
