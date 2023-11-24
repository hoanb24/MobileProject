import React from "react";
import {View, Text,FlatList,Image,Pressable} from "react-native";
import { ListData } from "./ListData";
import { useNavigation } from "@react-navigation/native";
const CardItem=()=>{
    const navigation=useNavigation();
    return(
        <View style={{}}>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={ListData}
            renderItem={({item})=>
            <Pressable
            onPress={()=>navigation.navigate('detailpage',{item:item})}
            style={{
            backgroundColor:"#FFFFFF",
            borderRadius:16,
            marginVertical:16,
            alignItems:"center",
            paddingHorizontal:8,
            paddingVertical:20,
            alignSelf:"center",
            marginRight: 20,
            elevation:0.2
            }}
            >
                <Image source={item.image} style={{ width:190,height:150,resizeMode:"cover" , marginBottom:12, borderRadius:20,}}/>
                <Text style={{ fontWeight:"bold"}}>{item.name}</Text>
                <Text>{item.time}</Text>
           </Pressable>}  
           /> 
        </View>    
    )
}
export default CardItem;