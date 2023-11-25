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
import { useNavigation } from "@react-navigation/native";



const Menu = () => {
  const navigation =useNavigation();
  
  return (
    <View style={Styles.menuItem}>
      <FlatList
        data={MenuData}
        renderItem={({ item }) => (
          <Pressable style={Styles.menuData} onPress={()=> navigation.navigate("menudetail", {item:item})}>
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",}}>
              <Image source={item.image} style={{ width: 100, height: 100 }} />
                <View style={{justifyContent:"flex-start", paddingLeft:20}}>
                  <Text style={{ fontSize: 20, fontWeight: "bold"}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "flex-start",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "100" }}>
                      {item.category}
                    </Text>
                  </View>
                </View>
            </View>
              <View>
                <Text
                  style={{ fontSize: 25, color: "#6B50F6", fontWeight: "900" }}
                >
                  $ {item.price}
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
    padding: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 22,
    fontWeight: "700",
    marginVertical:10,
    justifyContent:"space-between",
    alignItems:"center"
    
  },
});