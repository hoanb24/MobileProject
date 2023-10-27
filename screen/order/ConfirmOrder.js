import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground, View, TouchableOpacity, Text, Image } from "react-native";

const ConfirmOrder = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/IconBack.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>Order details</Text>
                </View>

                <View style={styles.content}>
                    <Text> Content</Text>
                </View>
                <View style={styles.footer}>
                    <Text> footer</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
export default ConfirmOrder;

const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
    },
    container: {
        margin: 20
    },

    header: {
        height: '20%',
        // backgroundColor: 'red',
        rowGap: 20,
        alignItems: 'flex-start'
    },
    textTitle: {
        fontSize: 25,
        color: '#2242e',
        fontWeight: 'bold'
    },
    content: {
        height: '50%',
        backgroundColor: 'pink',
    },
    footer: {
        height: '30%',
        backgroundColor: 'yellow',
    }
})  
