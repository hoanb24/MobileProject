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
import TestimonialFrame from "../../components/TestimonialFrame";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{
      backgroundColor:"#FBFBFF"
      // backgroundColor: "blue"
    }}>
      <SafeAreaView style={{ flex: 1, width: "90%", alignSelf: "center" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              width: "100%",
              alignItems: "center",
              paddingRight:20
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Find Your {"\n"}Favorite Food
            </Text>
            <FontAwesome
              style={{ 
                marginTop: 30,
                paddingHorizontal:15,
                paddingVertical:15,
                backgroundColor:"#FAFDFF",
                elevation:1,
                shadowColor:"rgba(20, 78, 90, 0.2)",
                borderRadius:15,
              
              }}
              name={"bell-o"}
              size={28}
              color="#6b50f6"
            />
          </View>

          <Pressable style={styles.Searchtext}>
            <View
              style={{
                backgroundColor: "rgba(107, 80, 246, 0.1)",
                flexDirection: "row",
                paddingVertical: 15,
                borderRadius: 18,
                paddingHorizontal: 15,
                marginVertical: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                flex: 1,
              }}
            >
              <FontAwesome name="search" size={28} color={"#6b50f6"} />
              <TextInput
                style={{ paddingLeft: 8, fontSize: 16, color: "#808080",  }}
                placeholder="What do you want to order ?"
                placeholderTextColor={"rgba(107, 80, 246, 0.5)"}
                clearButtonMode="always"
              ></TextInput>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("searchs");
              }}
                  
                  style={{
                    backgroundColor: "rgba(107, 80, 246, 0.1)",
                    paddingHorizontal:15,
                    paddingVertical:15,
                    borderRadius:15
                  }}
            >
              <Image
                source={require("../../assets/icons/Filter.png")}
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

          
          <View>

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
            <View
              style={{
                backgroundColor: "#6B50F6",
                width: "100%",
                height: 180,
                alignSelf: "center",
                borderRadius: 20
              }}
            >
              <Image
                style={{
                  height: 180,
                  borderRadius: 20,
                  position: "relative",
                  resizeMode: "stretch",
                }}

                source={require("../../assets/backgroundImages/backgound21.png")}

              />
              <View style={{ position: "absolute", bottom: 30, right: 25 }}>
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
                    marginLeft: 60,
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
            style={{ fontSize: 20, fontWeight: "bold" }}
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
    alignItems:"center",
    gap: 15,
  },
  menuImage: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderRadius: 18,
  },
});