import createDataContext from "./createDataContext"
import tracker from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage"

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

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await tracker.post("/signup", {
        email,
        password,
      })
      await AsyncStorage.setItem("token", response.data.token)
      dispatch({ type: "signup", payload: response.data.token })
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

const signout =
  (dispatch) =>
  ({ email, password }) => {}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
)
