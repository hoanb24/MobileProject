import React from "react";
import { Text, FlatList, Pressable, Image, StyleSheet, View } from "react-native";
import {  NearestData } from "./ListData";
const ViewNeares = () => {
    return (
    
        
                <View style={{ flex: 1,alignSelf: "center" }}>
                  
                    {/* Show reastaurant --------------------------*/}
                    <Text style={styles.Nearest}>Nearest Restaurant</Text>
                    <View   >
                        <FlatList
                            style={styles.flatListContainer}
                            data={NearestData}
                            renderItem={({item})=>
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
                                        paddingHorizontal: 8,
                                        paddingVertical: 26,
                                        alignSelf: "center",

                                    }}>

                                    <Image source={item.image} style={{ width: 150, height: 150, resizeMode: "center" }} />
                                    <Text>{item.name}</Text>
                                </Pressable>
                        }
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: "space-between",
                            gap: 10
                        }}
                        />
                    </View>
                </View>
                
        

    )
}
export default ViewNeares;
const styles = StyleSheet.create({
    Nearest: {
        fontSize: 20,
        fontWeight: "600",

    },
    flatListContainer: {
        width: "100%",
        margin: 8,
        flexDirection: 'row',
    },
})