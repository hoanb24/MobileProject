import React from "react";
import {
  View,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { MenuData } from "./ListData";
const Menu = () => {
  return (
    <View style={Styles.menuItem}>
      <FlatList
        data={MenuData}
        renderItem={({ item }) => (
          <Pressable style={Styles.menuData}>
            <Image source={item.image} style={{ width: 70, height: 70 }} />
            <View>
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 25, color: "#6B50F6", fontWeight: "900" }}
              >
                {item.price}$
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Menu;
Styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    width: "100%",
  },
  menuData: {
    padding: 13,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 22,
    fontWeight: "700",
    margin: 13,
    justifyContent: "space-around",
    alignItems:"center",
  },
});
