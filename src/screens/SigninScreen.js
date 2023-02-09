import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { Context as AuthContext } from "../context/AuthContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state?.errorMessage}
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
