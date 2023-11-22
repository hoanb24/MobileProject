import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    const user = {
      email,
      name,
      password,
    };

    try {
      const response = await fetch(
        "https://643918404660f26eb1aa3099.mockapi.io/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        console.log("Sign-up successful");
        saveData()
        navigation.navigate("login");
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error while signing up: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/images/didfood.png")}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>Create Your Account</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            backgroundColor: "#6B50F6",
            width: 150,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginVertical: 25,
    fontWeight: "bold",
  },
  input: {
    height: 70,
    width: 380,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
