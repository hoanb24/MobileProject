import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../home/CardItem";
import Menu from "../home/Menu";
const Ordered = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, width: "95%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 20,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Find Your {"\n"}Favorite Food
            </Text>
            <FontAwesome
              style={{ marginTop: 30 }}
              name={"bell-o"}
              size={28}
              color="#6b50f6"
            />
          </View>
          <Pressable style={styles.Searchtext}>
            <View
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                paddingVertical: 16,
                borderRadius: 18,
                paddingHorizontal: 18,
                marginVertical: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                flex: 1,
                marginLeft: 25,
              }}
            >
              <FontAwesome name="search" size={28} color={"#6b50f6"} />
              <TextInput
                style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}
                placeholder="What do you want to order ?"
                clearButtonMode="always"
              ></TextInput>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("searchs");
              }}
            >
              <Image
                source={require("../../assets/icons/FilterSearch.png")}
                style={{
                  width: 55,
                  height: 55,
                  marginVertical: 20,
                  backgroundColor: "#6B50F6",
                  opacity: 0.5,
                  borderRadius: 12,
                }}
              />
            </Pressable>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 20,
            marginVertical: 8,
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/bachtuoc.jpg")}
              style={{ width: 70, height: 70, borderRadius: 15 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>Spacy fresh crab</Text>
            <Text
              style={{
                color: "#22242E",
                fontWeight: "light",
                fontSize: 14,
                marginTop: 5,
                opacity: 0.3,
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{
                color: "#6B50F6",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
              }}
            >
              $ 35
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                backgroundColor: "#6B50F6",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Proccess</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 20,
            marginVertical: 8,
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/bachtuoc.jpg")}
              style={{ width: 70, height: 70, borderRadius: 15 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>Spacy fresh crab</Text>
            <Text
              style={{
                color: "#22242E",
                fontWeight: "light",
                fontSize: 14,
                marginTop: 5,
                opacity: 0.3,
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{
                color: "#6B50F6",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
              }}
            >
              $ 35
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                backgroundColor: "#6B50F6",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Proccess</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 20,
            marginVertical: 8,
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/mn1.png")}
              style={{ width: 70, height: 70, borderRadius: 15 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#22242E" }}>
              Spacy fresh crab
            </Text>
            <Text
              style={{
                color: "#22242E",
                fontWeight: "light",
                fontSize: 14,
                marginTop: 5,
                opacity: 0.3,
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{
                color: "#BEBEBE",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
              }}
            >
              $ 35
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                backgroundColor: "#BEBEBE",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Proccess</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 20,
            marginVertical: 8,
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/mn2.png")}
              style={{ width: 70, height: 70, borderRadius: 15 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>Spacy fresh crab</Text>
            <Text
              style={{
                color: "#22242E",
                fontWeight: "light",
                fontSize: 14,
                marginTop: 5,
                opacity: 0.3,
              }}
            >
              Waroenk kita
            </Text>
            <Text
              style={{
                color: "#BEBEBE",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
              }}
            >
              $ 35
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={{
                backgroundColor: "#BEBEBE",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Proccess</Text>
            </Pressable>
          </View>
        </View>

        <View style={{flex:1,}}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#6B50F6",
                width: "80%",
                height: 60,
                borderRadius: 20,
              }}
              onPress={toggleModal}
            >
              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Check out
              </Text>
            </TouchableOpacity>
          </View>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Đặt hàng thành công!</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.closeModalText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Ordered;
const styles = StyleSheet.create({
  Searchtext: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  menuImage: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderRadius: 18,
  },
  checkoutButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  checkoutButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B50F6",
    width: "80%",
    height: 60,
    borderRadius: 20,
  },
  checkoutButtonText: {
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeModalText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "blue",
  },
});
