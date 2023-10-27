import { View, Text, StyleSheet,Image} from 'react-native';
import React,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
export default function ShoppingCartPage() {
    const [value, setValue] = useState(0); 
  return (
    <View style={styles.container}>
        <Text >
            <AntDesign name="leftcircle" size={24} color="black" />
        </Text>
        <Text style={styles.header}>Order detail</Text>
        <View style={styles.cartcomponent}>
            <Image source={require('../../assets/images/chicken.png')} style={{width:100,height:100,}} />
            <View>
                <Text>chicken delicious</Text>
                <Text>Waroen kita</Text>
                <Text>$ 35</Text>
            </View>
            <View>
                <NumericInput
                    value={value}
                    onChange={(value) => setValue(value)}
                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                    totalWidth={80}
                    totalHeight={30}
                    iconSize={50}
                    step={1}
                    rounded
                    iconStyle={{ color: '#FFFFFF' }}
                    rightButtonBackgroundColor="#3F51B5"
                    leftButtonBackgroundColor="#BDBDBD"
                />  
            </View>
        </View>
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:30,
        marginHorizontal:16,
       
    },
    header:{
        paddingTop:15,
        fontSize:25,
        fontWeight:'bold',
    },
    cartcomponent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        marginHorizontal:8,
        marginVertical:16,
        backgroundColor:'#FFFFFF',
        borderRadius:16,
    }
})