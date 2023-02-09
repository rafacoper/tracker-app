import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload }
    case "signin":
      return { errorMessage: "", token: action.payload }
    case "add_error":
      return { ...state, errorMessage: action.payload }
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    default:
      return state
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" })
}

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password })
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signin", payload: response.data.token })

      navigate("TrackList")
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      })
    }
  }

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password })
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signin", payload: response.data.token })

      navigate("TrackList")
    } catch (error) {
      console.log(error)
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      })
    }
  }

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token")
  dispatch({ type: "signout" })
  navigate("loginFlow")
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: "" }
)
