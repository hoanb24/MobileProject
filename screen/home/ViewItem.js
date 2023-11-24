import React, { useState } from "react";
import {
  Text,
  FlatList,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { ListData } from "./ListData";
import Header from "./Header";
import ViewNeares from "./ViewNeares";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ViewItem = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = () => {
    const filteredResults = ListData.filter((item) => {
      if (item && item.name && item.description) {
        return (
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return false;
    });
    setSearchResults(filteredResults);
  };
  return (
    <View style={{backgroundColor:"#FBFBFF"}}>
      <View style={{ width: "90%", alignSelf: "center", }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
            width: "100%",
            alignItems: "center",
            paddingRight: 20
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Find Your {"\n"}Favorite Food
          </Text>
          <FontAwesome
            style={{
              marginTop: 30,
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "#FAFDFF",
              elevation: 1,
              shadowColor: "rgba(20, 78, 90, 0.2)",
              borderRadius: 15,

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
              style={{ paddingLeft: 8, fontSize: 16, color: "#808080", }}
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
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 15
            }}
          >
            <Image
              source={require("../../assets/icons/Filter.png")}
              style={{
                width: 24,
                height: 24,

              }}
            />
          </Pressable>
        </Pressable>
      </View>

      <ScrollView>
        <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", }}
          >
            Populer Restaurant
          </Text>
          <Text>
            <FlatList
              style={{ width: "100%" }}
              data={
                searchQuery === ""
                  ? ListData
                  : ListData.filter(
                    (item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      item.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                  )
              }
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("detailpage", { item: item })
                  }
                  style={{
                    backgroundColor: "#FFFFFF",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 7,
                    borderRadius: 16,
                    marginVertical: 16,
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 26,
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 160, height: 150, resizeMode: "stretch", marginBottom: 10, borderRadius: 5 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text>{item.time}</Text>
                </Pressable>
              )}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
                gap: 30
              }}
            />
          </Text>
        </View>
        <ViewNeares />
      </ScrollView>
    </View>
  );
};
export default ViewItem;
const styles = StyleSheet.create({
  Nearest: {
    fontSize: 20,
    fontWeight: "600",
  },
  itemRestaurant: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
    alignSelf: "center",
  },
  flatListContainer: {
    width: "100%",
    margin: 8,
    flexDirection: "row",
  },
  Searchtext: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  }
});
