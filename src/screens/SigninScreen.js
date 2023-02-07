import React, { useContext, useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "../components/Spacer"
import { Context as AuthContext } from "../context/AuthContext"

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign in for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChange={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button title="Sign in" onPress={() => signin({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account yet? Signup</Text>
      </TouchableOpacity>
    </View>
  )
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
    color: 'blue'
  }
})

export default SigninScreen
