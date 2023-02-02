import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>Track Screen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
})

export default TrackListScreen
