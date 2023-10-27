import {View,Text,StyleSheet,Pressable,Image} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const DetailPage=({navigation,route})=>{
    const {item}=route.params;
    console.log(item);
    return(
        <View style={{ backgroundColor:item.color,flex:1}}>
            <Pressable style={{marginHorizontal:20,marginTop:5}}  onPress={()=>navigation.goBack()}>
                <FontAwesome  name={"arrow-circle-left"} size={38} color="white" style={{marginVertical:18}}/>
            </Pressable>
            <View style={styles.imagesDetail}>
                <Image source={item.image}
                 style={{width:"100%",height:"100%",resizeMode:"contain"}}
                />
                <View style={{flexDirection:'row',gap:4}}>
                    <Text  style={{fontSize:20,fontWeight:400,color:'white'}}>{item.name}</Text>
                    <Text style={{fontSize:20,fontWeight:800,color:"blue"}}>|</Text>
                    <Text style={{fontSize:20,fontWeight:400,color:'white'}}>{item.time}</Text>
                </View>
            </View>
        </View>
    )
}
export default DetailPage;
const styles = StyleSheet.create({
    imagesDetail:{
     
        backgroundColor:'green',
        alignItems:"center",
        width:250,
        height:250,
        position:'absolute',
        marginTop:250,
        alignSelf:"center",
        borderTopLeftRadius:56,
        
        
    }
})