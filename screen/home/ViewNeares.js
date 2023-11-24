import React from "react";
import {
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { NearestData } from "./ListData";
const ViewNeares = () => {
  return (
    <View style={{ flex: 1, width:"90%",alignSelf: "center" }}>
      <Text style={styles.Nearest}>Nearest Restaurant</Text>
      <View>
        <FlatList
          style={styles.flatListContainer}
          data={NearestData}
          renderItem={({ item }) => (
            <Pressable
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
                style={{ width: 160, height: 150, resizeMode: "contain", borderRadius:40, }}
              />
              <Text>{item.name}</Text>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 30,
          }}
        />
      </View>
    </View>
  );
};
export default ViewNeares;
const styles = StyleSheet.create({
  Nearest: {
    fontSize: 20,
    fontWeight: "600",
  },
  flatListContainer: {
    width: "100%",
    flexDirection: "row",
  },
});
