import React,{useEffect,useState} from "react";
import {
  View,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { MenuData } from "./ListData";
import { ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          const userValue = data.value; 
          setUserName(userValue);
        } else {
          console.log("Không xác định");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
      }
    };

    fetchData();
  }, []);
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/Profile.png")}
        resizeMode="cover"
        style={Styles.image}
      >
        <View style={Styles.container}>
          <View style={Styles.profile}>
            <Text style={Styles.Title}>Member Gold</Text>
            <View style={Styles.userInfo}>
              <Text style={Styles.nameuse}>{userName}</Text>
              <Text style={Styles.emailText}>awdesign.ar@gmail.com </Text>
            </View>
            <View style={Styles.voucherContainer}>
              <Image source={require("../../assets/images/Voucher.png")} />
              <Text style={Styles.voucher}>You Have 3 Voucher</Text>
            </View>
            <Text style={Styles.favoriteText}>Favorite</Text>
            <View style={Styles.favoriteItemContainer}>
              <Image source={require("../../assets/images/Avtmenu.png")} />
              <View>
                <Text style={Styles.favoriteItemText}>Spacy fresh crab</Text>
                <Text  style={Styles.nametext}>Waroenk kita</Text>
                <Text  style={Styles.pricetext}>$ 35</Text>
              </View>
              <View>
              
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
    top: 340,
    borderRadius: 40,
    backgroundColor: 'white',

  },
  profile: {
    top: -50

  },
  Title: {
    color: "#6B50F6",
    marginLeft: 30,
    // backgroundColor:"#00FF66"
  },
  nameuse: {
    color: 'black',
    fontSize: 27,
    top: 30,
  },
  userInfo: {
    marginBottom: 10,
  },
  voucherContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    top: 50,
    marginLeft: 10
  },
  voucher: {
    marginLeft: 20,
    fontSize: 15
  },
  favoriteText: {
    color: 'black', // Add your desired text color here
    marginBottom: 10,
    top: 40,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  favoriteItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    top: 60,
    marginLeft: 10,


  },
  favoriteItemText: {
    color: 'black', // Add your desired text color here
    marginLeft: 15,
    marginTop:-12,
    fontSize:15

  },
  emailText: {
    color: "#2242E", // Add your desired text color here
    top: 35
  },
  image: {
    height: 365,
    width: 480,


  },
  nametext:{
    marginLeft: 15,
    marginTop:5
  },
  pricetext:{
    marginLeft: 15,
    fontSize:20,
    color:"#6B50F6"
  }

});

export default Profile;