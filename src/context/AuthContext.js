import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      state
  }
}

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if sign in fail throw error
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {}
}

const signout = (dispatch) => {
  return ({ email, password }) => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
)
