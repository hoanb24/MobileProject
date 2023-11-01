import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DetailPage = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  const handlePlaceOrderPress = () => {
    Alert.alert("Chúc mừng bạn", "Đặt hàng thành công");
  };
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <Pressable
        style={{ marginHorizontal: 20, marginTop: 5 }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome
          name={"arrow-circle-left"}
          size={38}
          color="white"
          style={{ marginVertical: 18 }}
        />
      </Pressable>
      <View style={styles.imagesDetail}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            borderRadius: 20,
          }}
        />
        <View style={{ flexDirection: "row", gap: 4, marginTop: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 800, color: "blue" }}>
            |
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
            {item.time}
          </Text>
        </View>
        <View>
          <View style={{ padding: 20 }}>
            <Pressable
              style={{
                width: "100%",
                height: "60%",
                padding:10,
                backgroundColor: "#FEFEFF",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={handlePlaceOrderPress}
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
  );
};
export default DetailPage;
const styles = StyleSheet.create({
  imagesDetail: {
    alignItems: "center",
    width: 250,
    height: 250,
    position: "absolute",
    marginTop: 250,
    alignSelf: "center",
    borderTopLeftRadius: 56,
  },
});
