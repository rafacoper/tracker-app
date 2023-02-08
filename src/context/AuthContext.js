import createDataContext from "./createDataContext"
import tracker from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload }
      case "addError":
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      await tracker.post("/signin", { email, password })
    } catch (error) {
      console.log(error)
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      })
    }
  }

// const signout =
//   (dispatch) =>
//   ({ email, password }) => {}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin },
  { token: null, errorMessage: "" }
)
