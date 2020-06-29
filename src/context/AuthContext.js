import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      navigate("TrackList");
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
  { token: null, errorMessage: "" }
);
