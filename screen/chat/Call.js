import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ImageBackground, View, TouchableOpacity, Text, Image } from "react-native";
export default function Call() {
    return (
        <ImageBackground
            style={styles.backGround}
            source={require('../../assets/images/Pattern.png')}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.userImageFrame}>
                    <Image
                        style={styles.userImage}
                        source={require('../../assets/userImages/userImage1.png')}
                    />
                </View>
                <View style={styles.userNameFrame}>
                    <Text style={styles.userName}> UserName</Text>
                    <Text style={styles.ringingAction}> 15.23 Min</Text>
                </View>
                <View style={styles.buttonActionFrame}>
                    <TouchableOpacity style={styles.backGroundVolumeUp}>
                        <Image
                            style={styles.volumeUpIcon}
                            source={require('../../assets/icons/VolumeOff.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backGroundCloseIcon}>
                        <Image
                            style={styles.closeIcon}
                            source={require('../../assets/icons/CloseIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: "100%"
    },
    container: {
        margin: 20
    },
    userImageFrame: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userImage: {
        width: 161,
        height: 161,
        backgroundColor: 'white',
        position: 'relative',
        top: 200,
        borderRadius: 161,

    },
    userNameFrame: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },
    userName: {
        color: "#22242E",
        fontSize: 25,
    },
    ringingAction: {
        color: "#22242E",
        opacity: 0.3,
        fontSize: 19,
        letterSpacing: 0.5
    },
    buttonActionFrame: {
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 30,
    },
    backGroundVolumeUp: {
        width: 78,
        height: 78,
        backgroundColor: "#FDFCFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 161,
        elevation:10,
    },
    volumeUpIcon: {
        width: 25,
        height: 20,
    },
    backGroundCloseIcon: {
        width: 78,
        height: 78,
        backgroundColor: "#FDFCFF",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 161,
        elevation:10,

    },
    closeIcon: {
        width: '100%',
        height: "100%",
    }
})