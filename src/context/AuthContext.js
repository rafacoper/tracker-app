import createDataContext from "./createDataContext"
import tracker from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    case "signup":
      return { errorMessage: "", token: action.payload }
    default:
      state
  }
}

const signup = (dispatch) =>
  console.log('AFTER DISPATCH');
  async ({ email, password }) => {
    try {
      const response = await tracker.post("/signup", {
        email,
        password,
      })
      console.log('RESPONSE ', response);
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signup", payload: response.data.token })
    
      navigate('TrackList')
    } catch (err) {
      console.log(err.message)
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      })
    }
  }

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
