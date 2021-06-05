import { ALL_POSTS_BY_USER, LOADING, ERROR } from "../types/postsTypes";

// Initial state of this reducers
const INITIAL_STATE = {
  error: "",
  loading: false,
  posts: [],
};

// The action is an object that we pass with help of the Redux action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_POSTS_BY_USER:
      return { ...state, posts: action.payload, loading: false, error: "" };
    default:
      return state;
  }
};
