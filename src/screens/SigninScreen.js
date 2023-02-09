import React, { useContext, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { NavigationEvents } from "react-navigation"
import { Context as AuthContext } from "../context/AuthContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"

const SigninScreen = () => {
  const { state, signin, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink routeName="Signup" text="Dont have a account yet? Sign up!" />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  text: {
    fontSize: 48,
  },
  link: {
    color: "blue",
  },
})

export default SigninScreen
