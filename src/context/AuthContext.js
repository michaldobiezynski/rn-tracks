import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up.",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to signin
    //handle success by updating state
    //handle failure by showing error message somehow
  };
};

const signout = (dispatch) => {
  return () => {
    //somehow signout!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
