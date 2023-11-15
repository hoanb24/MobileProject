import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListData } from "./ListData";

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const renderItem = ({ item }) => {
    if (selectedCategory && item.category !== selectedCategory) {
      return null;
    }

    if (
      searchInput !== "" &&
      !item.name.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={styles.contentCard}>
          <Image source={item.image} style={styles.imagess} />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                color: "#22242E",
              }}
            >
              {item.description}
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "#6B50F6", fontWeight: "bold", fontSize: 23 }}
            >
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const updateSearchResults = () => {
    const filteredResults = ListData.filter((item) => {
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }
      if (
        searchInput === "" ||
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    updateSearchResults();
  }, [searchInput, selectedCategory]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#FEFEFF" }}>
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
            style={{
              marginTop: 30,
              paddingHorizontal: 16,
              backgroundColor: "#FAFAFA",
              height: 50,
              width: 60,
              borderRadius: 25,
            }}
            name={"bell-o"}
            size={28}
            color="#6B50F6"
          />
        </View>

        <Pressable style={styles.Searchtext}>
          <View
            style={{
              backgroundColor: "#ECEFF1",
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
              marginHorizontal: 16,
            }}
          >
            <FontAwesome name="search" size={28} color={"#6b50f6"} />
            <TextInput
              style={{ paddingLeft: 8, fontSize: 16, color: "#6B50F6" }}
              placeholder="What do you want to order ?"
              value={searchInput}
              onChangeText={(text) => setSearchInput(text)}
            />
          </View>
        </Pressable>
        <Text style={{ marginHorizontal: 16, fontSize: 20, fontWeight: "800" }}>
          Type
        </Text>
        <View style={styles.buttomcategory}>
          <TouchableOpacity
            style={
              selectedCategory === "haisan"
                ? styles.activeButton
                : styles.button
            }
            onPress={() => selectCategory("haisan")}
          >
            <Text style={{ color: "#6B50F6" }}>SeaFood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedCategory === "thitkho"
                ? styles.activeButton
                : styles.button
            }
            onPress={() => selectCategory("thitkho")}
          >
            <Text style={{ color: "#6B50F6" }}>Other Menu</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Searchtext: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  filterSearch: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 16,
    flexWrap: "wrap",
  },
  filtername: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#00FF66",
    borderRadius: 16,
    color: "#6B50F6",
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  categoryLocate: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  categoryFood: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  search: {
    color: "#FEFEFF",
  },
  Searchbuttom: {
    padding: 18,
    backgroundColor: "#6B50F6",
    marginVertical: 120,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryCate: {
    backgroundColor: "#66BB6A",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    borderRadius: 16,
    width: 280,
    textAlign: "center",
    padding: 10,
    marginVertical: 23,
  },
  DataCategory: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 15,
    borderRadius: 16,
    width: "90%",
  },
  CategoryContent: {
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 20,
    marginStart: 5,
  },
  typename: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 42,
    backgroundColor: "#00FF66",
    borderRadius: 16,
    color: "#6B50F6",
  },
  buttomcategory: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    backgroundColor: "#00FF66",
    opacity: 0.6,
    borderRadius: 8,
  },
  activeButton: {
    padding: 10,
    backgroundColor: "#FF9012",
    borderRadius: 8,
  },
  imagess: {
    width: 80,
    height: 80,
  },
  contentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    marginHorizontal: 28,
    marginVertical: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
  },
});
