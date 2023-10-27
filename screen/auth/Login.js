import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View>
      <Text style={styles.text}> Login Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "black",
  },
});
