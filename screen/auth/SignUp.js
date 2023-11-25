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
        <Text style={styles.text}>Sign Up For Free</Text>
      </View>
      <View>
      <Image
        source={require('../../assets/icons/profile.png')}
        style={{ width: 20, height: 20, left: 10 , top:45}}
      />
        <TextInput
          style={styles.input}
          placeholder="          Madeofzero.."
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View> 
        <Image
        source={require('../../assets/icons/message.png')}
        style={{ width: 20, height: 20, left: 10 , top:45}}
      />
        <TextInput
          style={styles.input}
          placeholder="          Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
      <Image
        source={require('../../assets/icons/lock.png')}
        style={{ width: 20, height: 20, left: 10 , top:45}}
      />
        <TextInput
          style={styles.input}
          placeholder="         Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>

      <Image
        source={require('../../assets/icons/IconPlus.png')}
        style={{ width: 20, height: 20, right:80,  top:22}}
      />
        <Text style={{
          fontSize: 15,
          right: 65,
          color: 'gray',
          marginLeft:10

        }}>Keep Me Signed In</Text>
        <Image
        source={require('../../assets/icons/IconPlus.png')}
        style={{ width: 20, height: 20, right:80,  top:30}}
      />
        <Text style={{
          fontSize: 15,
          right: 55,
          color: 'gray',
          top: 10
        }}>Email Me About Special Pricing</Text>
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
            top: 30
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ right: 0, top: 36 , color: '#6B50F6' }}>Already Have An Account ?</Text>
      </View>
    </View>
  );
};




export default SignUp;

const styles = StyleSheet.create({
  container: {
    top: -20,
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
    borderColor: "white",
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
