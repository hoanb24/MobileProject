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
const Payment = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require("../../assets/icons/IconBack.png")} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>Shipping</Text>
        </View>
        <View style={{ alignItems:"center" }}>
          <View
            style={{
              marginTop: 30,
              backgroundColor: "#FEFEFF",
              width: "100%",
              height: 100,
              padding: "3%",
              borderRadius: 10,
              shadowOpacity: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/visa.png")}
                style={{
                  width: 100,
                  height: 60,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
              />
              <View>
                <Text style={{ marginLeft: 50, fontWeight: "bold", fontSize:18, }}>
                  2121 6352 8465 ****
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: 100,
              padding: "3%",
              borderRadius: 10,
              shadowOpacity: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/paypal.png")}
                style={{
                  width: 100,
                  height: 60,
                  resizeMode: "contain",
                  borderRadius: 20,
                  marginLeft: 20,
                }}
              />
              <View>
                <Text style={{ marginLeft: 50, fontWeight: "bold" }}>
                  2121 6352 8465 ****
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: 100,
              padding: "3%",
              borderRadius: 10,
              shadowOpacity: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/payoneer.png")}
                style={{
                  width: 80,
                  height: 40,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
              />
              <View>
                <Text style={{ marginLeft: 50, fontWeight: "bold" }}>
                  2121 6352 8465 ****
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Payment;

const styles = StyleSheet.create({

  container: {
    padding: 20,
  },

  header: {
    height: "20%",
    rowGap: 20,
  },
});
