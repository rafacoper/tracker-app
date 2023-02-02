import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Signup Screen</Text>
      <Button
        title="Go to signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("TrackList")}
      />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
})

export default SignupScreen
