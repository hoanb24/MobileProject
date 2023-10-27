import React ,{useState}from "react";
import { Text, FlatList, Pressable, Image, ScrollView, StyleSheet, View ,TextInput} from "react-native";
import { ListData } from "./ListData";
import Header from "./Header";
import ViewNeares from "./ViewNeares";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ViewItem = () => {
    const navigation=useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const performSearch = () => {
        const filteredResults = ListData.filter(item => {
          // Kiểm tra xem item có thuộc tính 'name' và 'description' không
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
        <>
          <View style={{ width: "95%", alignSelf: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 20, width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    Find Your {'\n'}Favorite Food
                </Text>
                <FontAwesome style={{ marginTop: 30 }} name={"bell-o"} size={28} color="red" />
            </View>

            <Pressable style={styles.Searchtext}>
                <View style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row', paddingVertical: 16,
                    borderRadius: 18,
                    paddingHorizontal: 18,
                    marginVertical: 16,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 7,
                    flex: 1,
                    marginLeft: 25
                }}>
                    <FontAwesome name="search" size={28} color={"#6b50f6"} />
                    <TextInput style={{ paddingLeft: 8, fontSize: 16, color: '#808080' }}
                        placeholder="What do you want to order ?"
                        onChangeText={text => {
                            setSearchQuery(text);
                            performSearch();
                          }}
                          value={searchQuery}
                    >
                    </TextInput>
                </View>
                <Pressable
                    onPress={() => {navigation.navigate("searchs")}}
                >
                    <Image source={require("../../assets/icons/FilterSearch.png")} style={{ width: 55, height: 55, marginVertical: 20 }} />
                </Pressable>




            </Pressable>
        </View>
         <ScrollView>
                   
                <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
                    
                    <Text style={{ fontSize: 20, fontWeight: "600", marginHorizontal: 16 }}>Populer Restaurant</Text>
                    <Text>
                        <FlatList
                      
                            style={{ width: "100%" }}
                            data={searchQuery === '' ? ListData : ListData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()))}
                            renderItem={({ item }) =>
                                <Pressable
                                    onPress={()=>navigation.navigate('detailpage',{item:item})}
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
                                    <Text>{item.time}</Text>
                                    <Text>{item.name}</Text>    
                                </Pressable>
                            }
                            numColumns={2}
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                                gap: 10
                            }}

                        />
                    </Text>

                    {/* Show reastaurant --------------------------*/}
                   
                   <ViewNeares/>
                </View>

                </ScrollView>
                </>
    

    )
}
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
        flexDirection: 'row',
    },
    Searchtext: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15

    },
})