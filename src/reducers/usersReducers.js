import { ALL_USERS } from "../types/usersTypes";

// Initial state of this reducers
const INITIAL_STATE = {
  users: [],
};

// The action is an object that we pass with help of the Redux action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
