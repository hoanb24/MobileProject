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
const backgroundFooter = require("../../assets/images/location.png");
const ConfirmOrder = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate("detailpage")}}>
            <Image source={require("../../assets/icons/IconBack.png")} />
          </TouchableOpacity>
          <Text style={styles.textTitle} selectionColor={"pink"}>
            Confirm Order
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FEFEFF",
            width: "100%",
            height: 100,
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
        </View>
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#FEFEFF",
            width: "100%",
            height: 100,
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
                Payment Method
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate("payment");
                }}
              >
                <Text style={{ color: "#6B50F6" }}>Edit</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/paypal.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
                borderRadius: 20,
              }}
            />
            <View>
              <Text style={{ marginLeft: 200, fontWeight: "bold" }}>
                2121 6352 8465 ****
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.totalPayment}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#FEFEFF" }}>
                {" "}
                Sub - Total
              </Text>
              <Text style={{ fontSize: 20, color: "#FEFEFF", paddingTop: 10 }}>
                12$
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#FEFEFF" }}>
                {" "}
                Delivery Charge
              </Text>
              <Text style={{ fontSize: 20, color: "#FEFEFF", paddingTop: 10 }}>
                {" "}
                10$
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#FEFEFF" }}> Discount</Text>
              <Text style={{ fontSize: 20, color: "#FEFEFF", paddingTop: 10 }}>
                {" "}
                20$
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#FEFEFF", paddingTop: 10 }}>
                {" "}
                Total
              </Text>
              <Text style={{ fontSize: 20, color: "#FEFEFF", paddingTop: 10 }}>
                {" "}
                2$
              </Text>
            </View>
            <View style={{ padding: 20 }}>
              <Pressable
                style={{
                  marginTop: 20,
                  width: "100%",
                  height: "50%",
                  backgroundColor: "#FEFEFF",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => {navigation.navigate("ordered")}}
              >
                <Text
                  style={{ color: "#6B50F6", fontSize: 20, fontWeight: "bold" }}
                >
                  Place My Order
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ConfirmOrder;

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
  textTitle: {
    fontSize: 25,
    color: "#2242e",
    fontWeight: "bold",
  },
  content: {
    height: "50%",
    backgroundColor: "pink",
  },
  footer: {
    marginTop: 20,
    height: 330,
    backgroundColor: "#6B50F6",
    borderRadius: 20,
    padding: 20,
  },
});
