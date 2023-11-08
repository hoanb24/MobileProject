// import React from "react";
// import {
//   View,
//   FlatList,
//   Pressable,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   ScrollView
// } from "react-native";
// import { MenuData } from "./ListData";
// import { ImageBackground } from "react-native";

// const Menu = () => {
//   return (
//     <View contentContainerStyle={Styles.scrollViewContent}>
//     <ImageBackground
//       source={require("../../assets/images/Profile.png")}
//       resizeMode="cover"
//       style={Styles.image}
//     >
//       <View style={Styles.container}>
//         <View style={Styles.profile}>
//           <Text style={Styles.Title}>Member Gold</Text>
//           <View style={Styles.userInfo}>
//             <Text style={Styles.nameuse}>Arash Ranjbaran</Text>
//             <Text style={Styles.emailText}>awdesign.ar@gmail.com </Text>
//           </View>
//           <View style={Styles.voucherContainer}>
//             <Image source={require("../../assets/images/Voucher.png")} />
//             <Text style={Styles.voucher}>You Have 3 Voucher</Text>
//           </View>
//           <Text style={Styles.favoriteText}>Favorite</Text>
//           <View style={Styles.favoriteItemContainer}>
//             <Image source={require("../../assets/images/Avtmenu.png")} />
//             <View>
//               <Text style={Styles.favoriteItemText}>Spacy fresh crab</Text>
//               <Text style={Styles.nametext}>Waroenk kita</Text>
//               <Text style={Styles.pricetext}>$ 35</Text>
//             </View>
//             <View>
//               <TouchableOpacity
//                 style={Styles.purpleButton}
//                 onPress={() => {
//                   // Add your button press logic here
//                 }}
//               >
//                 <Text style={Styles.buttonText}>Buy Again</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           {/* Add more favorite items as needed */}
//         </View>
//       </View>
//     </ImageBackground>
//   </View>
//   );
// };

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     top: 350,
//     borderRadius: 40,
//     marginRight:15,
//     backgroundColor: 'white',
//     textAlign:"center"

//   },
//   profile: {
//     top: -90

//   },
//   Title: {
//     color: "#6B50F6",
//     marginLeft: 30,
//     // backgroundColor:"#00FF66"
//   },
//   nameuse: {
//     color: 'black',
//     fontSize: 27,
//     top: 30,
//   },
//   userInfo: {
//     marginBottom: 10,
//   },
//   voucherContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//     top: 50,
//     marginLeft: 10
//   },
//   voucher: {
//     marginLeft: 20,
//     fontSize: 15
//   },
//   favoriteText: {
//     color: 'black', // Add your desired text color here
//     marginBottom: 10,
//     top: 40,
//     fontSize: 20,
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   favoriteItemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//     top: 60,
//     marginLeft: 10,


//   },
//   favoriteItemText: {
//     color: 'black', // Add your desired text color here
//     marginLeft: 15,
//     marginTop: -12,
//     fontSize: 15

//   },
//   emailText: {
//     color: "#2242E", // Add your desired text color here
//     top: 35
//   },
//   image: {
//     height: 395,
//     width: 390,


//   },
//   nametext: {
//     marginLeft: 15,
//     marginTop: 5
//   },
//   pricetext: {
//     marginLeft: 15,
//     fontSize: 20,
//     color: "#6B50F6"
//   },
//   purpleButton: {
//     backgroundColor: '#6B50F6',
//     padding: 10,
//     borderRadius: 15,
//     marginTop: 5,
//     marginLeft:50
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },

// });

// export default Menu;
import React, { useRef } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const Profile = () => {
  const listMenu = [
    {
      id: "0",
      image: require("../../assets/images/carrot.jpg"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$47",
    },
    {
      id: "1",
      image: require("../../assets/images/chicken.png"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$55",
    },  {
      id
      : "2",
      image: require("../../assets/images/lasgana.png"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$89",
    },
    {
      id
      : "3",
      image: require("../../assets/images/tuna.png"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$7",
    },
    {
      id
      : "4",
      image: require("../../assets/images/Avtmenu.png"),
      menuName: "Herbal Panceke",
      restaurantName: "Warung Herbal",
      price: "$7",
    },
  ];
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/Profile.png")}
        style={{
          width: "100%",
          height: "70%",
          top: -20
        }}
        resizeMode="cover"
      ></ImageBackground>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            paddingVertical: 8,
            width: 120,
            backgroundColor: "#e6fff0",
            borderRadius: 23,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#6B50F6",
              fontWeight: "500",
            }}
          >
            Member good
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            paddingTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Le Xuan
          </Text>
          <Pressable>
            <FontAwesome
              name="edit"
              size={30}
              color="#6B50F6"
              marginHorizontal={12}
            />
          </Pressable>
        </View>
        <Text
          style={{ lineHeight: 17, color: "#BBBBBB", marginHorizontal: 20 }}
        >
          LeXuan22013@gmail.com
        </Text>
        <Pressable style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          textAlign: 'center',
          marginVertical: 15
        }} >
          <Image source={require("../../assets/images/Voucher.png")} />
          <Text style={{ marginLeft: 15, fontWeight: '700' }}>You have 3 Vocher</Text>
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: "700", marginHorizontal: 20, }}>Favorite</Text>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{
            flexDirection: "column",
            marginHorizontal: 20,
            marginBottom: 70
          }}
        >
          {listMenu.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                backgroundColor: "#ffffff",
                marginVertical: 10,
                borderRadius: 14,
                
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                paddingHorizontal: 25,
              }}
            >
              <Image
                style={{ width: 70, height: 70, resizeMode: "contain" }}
                source={item.image}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 200,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "500",
                      fontWeight: "900",
                    }}
                  >
                    {item?.menuName}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      fontSize: 13,
                      fontWeight: "500",
                      lineHeight: 17,
                      color: "#BBBBBB",
                    }}
                  >
                    {item?.restaurantName}
                  </Text>
                  <Text
                    style={{
                      color: "#6B50F6",
                      fontSize: 18,
                      fontWeight: "900",
                    }}
                  >
                    {item?.price}
                  </Text>
                </View>
                <Pressable
                  style={{
                    borderRadius: 17,
                    backgroundColor: "#6B50F6",
                    paddingVertical: 5,
                    paddingHorizontal: 11
                  }}
                >
                  <Text style={{
                    color: "#ffff",
                    fontWeight: "500",
                  }}>Buy Again</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    top:265,
    height: BOTTOM_SHEET_MAX_HEIGHT,

    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "#EEEEEE",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
});

export default Profile;