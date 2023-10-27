import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CardItem from "./CardItem";
import Menu from "./Menu";
const Home = ({ navigation }) => {
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
              color="red"
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
            {/* <FontAwesome name={"bars"} size={35} color="blue" style={{ marginTop: 25 }} /> */}
            <Pressable
              onPress={() => {
                navigation.navigate("searchs");
              }}
            >
              <Image
                source={require("../../assets/icons/FilterSearch.png")}
                style={{ width: 55, height: 55, marginVertical: 20 }}
              />
            </Pressable>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              width: "95%",
              left: 10,
              backgroundColor: "#6B50F6",
              alignItems: "center",
              borderRadius: 8,
              gap: 20,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 150, height: 200, resizeMode: "contain" }}
              source={require("../../assets/backgroundImages/bg1.png")}
            />
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Special Deal For October
              </Text>
              <Pressable>
                <Text
                  style={{
                    width: 70,
                    height: 30,
                    backgroundColor: "white",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    fontSize: 15,
                    paddingHorizontal: 5,
                    borderRadius: 8,
                    marginTop: 10,
                    paddingTop: 5,
                    marginLeft:60,
                  }}
                >
                  Buy now
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={{ paddingVertical: 16 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 18,
                }}
              >
                Nearest Restaurant
              </Text>
              <Pressable onPress={() => navigation.navigate("allview")}>
                <Text style={{ color: "#6B50F6" }}>View More</Text>
              </Pressable>
            </View>

            <CardItem />
          </View>
        </View>

        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 26 }}
          >
            Populer Menu
          </Text>
          <Menu />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
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
});
