import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import Spacer from "../components/Spacer"
import { Context as AuthContext } from "../context/AuthContext"

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
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
        onChange={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button title="Sign in" onPress={() => signin({ email, password })} />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
})

export default SigninScreen
