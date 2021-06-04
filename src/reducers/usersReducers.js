import { ALL_USERS, LOADING, ERROR } from "../types/usersTypes";

// Initial state of this reducers
const INITIAL_STATE = {
  error: "",
  loading: false,
  users: [],
};

// The action is an object that we pass with help of the Redux action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ALL_USERS:
      return { ...state, users: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
