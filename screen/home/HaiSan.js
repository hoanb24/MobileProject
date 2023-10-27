// import React, { useState } from "react";
// import {View,Text,StyleSheet,Image,FlatList,Pressable,TextInput} from 'react-native';
// import { ListData } from "./ListData";
// import { FontAwesome } from "@expo/vector-icons";
// export default function HaiSan(){
//     const [categoryFilter, setCategoryFilter] = useState('haisan');

//     const renderItem =({item})=>{
//         if (categoryFilter && item.category !== categoryFilter) {
//             return null;
//         }
//         return (
//             <View>
                 
//                 <View style={styles.contentCard}>
               
                    // <Image source={item.image} style={styles.imagess}/>
                    // <View >
                    //     <Text style={styles.itemName}>{item.name}</Text>
                    //     <Text style={styles.itemDesc}>{item.description}</Text>
                    // </View>
                    // <View>
                    //     <Text style={styles.itemPrice}>{item.price}</Text>
                    // </View>
                    
              
//                 </View>

//             </View>
//         );
//     }
//     return(
//         <View style={styles.container}>
//              <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 20, width: "100%", alignItems: "center" }}>
//                     <Text style={{ fontSize: 40, fontWeight: "bold" }}>
//                         Find Your {'\n'}Favorite Food
//                     </Text>
//                     <FontAwesome style={{ marginTop: 30, paddingHorizontal: 16, backgroundColor: "#FAFAFA", height: 50, width: 60, borderRadius: 25 }} name={"bell-o"} size={28} color="#6B50F6" />
//                 </View>

//                 <Pressable style={styles.Searchtext}>
//                     <View style={{
//                         backgroundColor: '#ECEFF1',
//                         flexDirection: 'row', paddingVertical: 16,
//                         borderRadius: 18,
//                         paddingHorizontal: 18,
//                         marginVertical: 16,
//                         shadowColor: "#000",
//                         shadowOffset: { width: 0, height: 4 },
//                         shadowOpacity: 0.1,
//                         shadowRadius: 7,
//                         flex: 1,
//                         marginHorizontal: 16
//                     }}>
//                         <FontAwesome name="search" size={28} color={"#6b50f6"} />
//                         <TextInput style={{ paddingLeft: 8, fontSize: 16, color: '#6B50F6' }}
//                             placeholder="What do you want to order ?"

//                         >
//                         </TextInput>
//                     </View>
                   
//                 </Pressable>
//             <Text style={styles.nameFilter}> {categoryFilter} </Text>
//             <FlatList
//                 data={ListData}
                
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
       
//     },
//     nameFilter:{
//         marginHorizontal:28,
//         marginTop:50,
//         fontSize:30,
//         fontWeight:'500',
//     },
//     imagess:{
//         width:80,
//         height:80,
//     },
//     itemName:{
       
//     },
//     itemDesc:{
       
//     },
//     itemPrice:{
//         color:'#6B50F6',
//         fontSize:20,
//         fontWeight:"600"
//     },
//     contentCard:{
//         flexDirection:"row",
//         justifyContent:"space-around",
//         padding:10,
//         marginHorizontal:28,
//         marginVertical:16,
//         backgroundColor:"white",
//         borderRadius:16
//     },
//     Searchtext: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         gap: 15

//     },
// })
