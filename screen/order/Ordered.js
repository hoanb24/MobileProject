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
  import CardItem from "../home/CardItem";
  import Menu from "../home/Menu";
  const Ordered = ({ navigation }) => {
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
  });
  