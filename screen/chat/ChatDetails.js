import React, { useEffect, useRef, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ImageBackground, View, TouchableOpacity, Text, Image, TextInput, ScrollView }
    from "react-native";
const dataChatContents = [
    {
        meToThem: "Hi, Khỏe Khum"
    },
    {
        meToThem: "Dạo này vẫn ổn chứ"
    },
    {
        theyToMe: " Không, Thiếu tiền !",
    },
    {
        meToThem: " Tui cũng vậy !"
    }
];
export default function ChatDetail({navigation}) {
    const [dataChat, setDataChat] = useState();
    const [dataInputChat, setDataInputChat] = useState('');
    const [showEmptyMessageAlert, setShowEmptyMessageAlert] = useState(false);
    const scrollViewRef = useRef();
    useEffect(
        () => {
            if (!dataChat) {
                setDataChat(dataChatContents)
            }
        }, [dataInputChat])

    const handleChatSent = () => {
        if (dataInputChat === '') {
            setShowEmptyMessageAlert(true);
            setTimeout(() => {
                setShowEmptyMessageAlert(false);
            }, 500); 
        } else {
            const newMessage = { meToThem: dataInputChat };
            const mesUpdate = [...dataChat, newMessage];
            setDataChat(mesUpdate);
            setDataInputChat('');
        }
    }
    return (
        <ImageBackground
            style={styles.backGround}
            source={require('../../assets/images/Pattern.png')}
            resizeMode="cover"
        >
            <StatusBar />
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Image source={require('../../assets/icons/IconBack.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.chatText}>Chat</Text>
                    </View>

                    <TouchableOpacity style={styles.frameProfile}>
                        <Image source={require('../../assets/images/Klein.png')} />
                        <View style={{ width: '70%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={styles.nameText}>Lê Xuân</Text>
                            <View style={styles.statusFrame}>
                                <Image source={require('../../assets/icons/Ellipse184.png')} />
                                <Text style={styles.statusText}>Online</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('callRinging')}
                        >
                            <Image source={require('../../assets/icons/CallLogo.png')} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <ScrollView
                        style={styles.chatContent}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >
                        {
                            dataChat ?
                                dataChat.map((mes,index) => (
                                    mes.theyToMe ?
                                        <Text key={`theyToMe_${index}`} style={styles.chatContentThey}>{mes.theyToMe}</Text>
                                        :
                                        <Text key={`meToThem_${index}`} style={styles.chatContentMe}>{mes.meToThem}</Text>
                                ))
                                : <Text style={styles.chatContentMe}> There is have no content chat</Text>
                        }
                    </ScrollView>
                    {showEmptyMessageAlert && (
                        <View style={styles.alertContainer}>
                            <Text style={styles.alertText}>Bạn chưa gõ tin nhắn.</Text>
                        </View>
                    )}
                    <View style={styles.chatInputFrame}>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => setDataInputChat(newText)}
                            value={dataInputChat}
                            placeholder="Messages"
                        />
                        <TouchableOpacity
                            onPress={handleChatSent}
                            style={styles.SendIconFrame}
                        >
                            <Image source={require('../../assets/icons/SendIcon.jpg')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: "100%"
    },
    container: {
        margin: 20,
        marginTop: 50,
        rowGap: 20
    },
    chatText: {
        fontSize: 25,
        color: '#22242E',
        fontWeight: 'bold'
    },
    frameProfile: {
        justifyContent: 'space-around',
        height: 93,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        borderRadius: 22,
        columnGap: 30,
        elevation: 10,
    }

    ,
    statusFrame: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 10,
    },
    nameText: {
        color: "black",
        fontSize: 15,

    },
    statusText: {
        color: '#22242e',
        opacity: 0.3
    },
    chatContent: {
        height: "58%",
        borderRadius: 20
    },
    chatContentThey: {
        alignSelf: 'flex-start',
        backgroundColor: '#F6F6F6',
        color: '#181818',
        fontSize: 14,
        opacity: 0.8,
        width: 'auto',
        padding: 10,
        margin: 15,
        borderRadius: 13,
        elevation: 10,
        lineHeight: 20,

    },
    chatContentMe: {
        alignSelf: 'flex-end',
        backgroundColor: '#6B50F6',
        color: '#FFF',
        fontSize: 14,
        width: 'auto',
        padding: 10,
        margin: 15,
        borderRadius: 13,
        elevation: 10,
        lineHeight: 20
    },

    chatInputFrame: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 74,
        margin: 2,
        flexDirection: 'row',
        elevation: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-around',
        borderRadius: 22,
        marginTop:-20,
    },

    input: {
        height: "70%",
        width: "90%",
        padding: 8,
        opacity: 0.8,
        fontSize: 17,
    },
    SendIconFrame: {
        flexDirection: 'row',
        height: "70%",
        alignItems: 'center',
    },

    alertContainer: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Màu nền mờ đen
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius:24,
        opacity:0.9,
    },
    alertText: {
        color: 'white', // Màu chữ trắng
        fontWeight: 'bold',
    },
});



