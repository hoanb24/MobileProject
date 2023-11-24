import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import axios from "axios"; // Import Axios
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSignIn = async () => {
    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.get(
        "https://643918404660f26eb1aa3099.mockapi.io/user"
      );

      if (response.data) {
        const users = response.data;
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          console.log(users);
          console.log("Đăng nhập thành công");
          saveData(userData.email);
          readData(userData.email);
          navigation.navigate("profile");
        } else {
          console.error("Đăng nhập thất bại");
        }
      } else {
        console.error("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập: ", error);
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
        <Text style={styles.text}>Login to Your Account</Text>
      </View>
      <View>
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
        <Text style={{ justifyContent: "center", alignItems: "center", marginLeft:135}}>
          Or Continue With
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 500,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            width: 160,
            height: 60,
            borderRadius: 10,
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <Image
            source={require("../../assets/images/fb.png")}
            style={{
              width: 40,
              height: 30,
              resizeMode: "contain",
            }}
          />
          <Text>Facebook</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            width: 160,
            height: 60,
            borderRadius: 10,
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <Image
            source={require("../../assets/images/gg.png")}
            style={{
              width: 40,
              height: 30,
              resizeMode: "contain",
            }}
          />
          <Text>Google</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#6B50F6", marginVertical: 10 }}>Register</Text>
        </Pressable>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSignIn}
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const saveData = async (value) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({value})  );
    console.log('Dữ liệu đã được thêm thành công!');
  }
  catch(error) {
    console.error('Lỗi thêm dữ liệu', error);
  }
};

const readData = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      console.log('Data',value);
    }
    else {
      console.log('Khong xac dinh');
    }
  }
  catch(error){
    console.error('loi khi lay data');
  }
}

export default SignIn;

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
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  
    
  }
});
