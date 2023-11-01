import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
  Icon,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Shipping = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require("../../assets/icons/IconBack.png")} />
          </TouchableOpacity>
          <Text style={styles.textTitle} selectionColor={"pink"}>
            Shipping
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FEFEFF",
            width: "100%",
            height: 110,
            padding: "3%",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <Text style={{ color: "#22242E", opacity: 0.4 }}>
                Order Location
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate("shipping");
                }}
              >
                <Text style={{ color: "#6B50F6" }}>Edit</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/location.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
                borderRadius: 20,
              }}
            />
            <Text style={{ paddingLeft: "4%", fontWeight: "bold" }}>
              8502 Preston Rd.Inglewood, Maine 98380
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FEFEFF",
            width: "100%",
            height: 120,
            padding: "3%",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <Text style={{ color: "#22242E", opacity: 0.4 }}>Deliver To</Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate("shipping");
                }}
              >
                <Text style={{ color: "#6B50F6" }}>Edit</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/location.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
                borderRadius: 20,
              }}
            />
            <Text style={{ paddingLeft: "4%", fontWeight: "bold" }}>
              4517 Washington Ave.Manchester, Kentucky 39495
            </Text>
          </View>
          <View style={{ marginLeft: 55 }}>
            <Pressable>
              <Text style={{ color: "#6B50F6" }} onPress={() => {
                navigation.navigate("address")
              }}>set location</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Shipping;

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    height: "100%",
  },
  container: {
    margin: 20,
  },

  header: {
    height: "20%",
    rowGap: 20,
    alignItems: "flex-start",
  },
});
