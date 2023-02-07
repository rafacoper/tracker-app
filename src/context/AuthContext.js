import createDataContext from "./createDataContext"
import tracker from "../api/tracker"

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    default:
      state
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracker.post("/signup", {
        email,
        password,
      })
    } catch (err) {
      console.log(err.message)
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      })
    }
  }
}

const signin = (dispatch) => {
  return async ({ email, password }) => {
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
}

const signout = (dispatch) => {
  return ({ email, password }) => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
)
