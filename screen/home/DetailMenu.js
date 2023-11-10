import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View, Dimensions,
  TouchableOpacity,
  FlatList, StatusBar,
  Animated
} from 'react-native';
import React from 'react';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import TestimonialFrame from '../../components/TestimonialFrame';
import { reviewData } from './ListData';

const { width, height } = Dimensions.get('window');

export default function DetailMenu() {
  const renderItem = ({ item }) => <TestimonialFrame testimonial={item} />;
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <>
      <SafeAreaView>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
          )}
        >
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            height: height - 400,
          }}>
            <Animated.Image source={require("../../assets/images/Sandwichmnu.png")}
              resizeMode='cover'
              style={{
                ...styles.banner(scrollA),

                width: '100%',
                height: '100%',

              }}

            />
          </View>
          <View style={styles.details}>
            <View style={{
              width: 80,
              height: 8,
              backgroundColor: "#FEF6ED",
              alignSelf: "center",
              borderRadius: 10
            }} />

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={styles.popular}>
                <Text style={{ color: "#6B50F6", fontWeight: "400", fontSize: 16 }}>Popular</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 12 }}>
                <View style={{
                  ...styles.statusIcon,
                  backgroundColor: "rgba(107, 80, 246, 0.1)",
                }}>
                  <MaterialIcons
                    name="location-on" size={30}
                    color="#6B50F6"
                  />
                </View>
                <View style={{
                  ...styles.statusIcon,
                  backgroundColor: "rgba(255, 75, 75, 0.1)",
                }}>
                  <AntDesign name="heart" size={20} color="red" />
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 27, fontWeight: "800", marginVertical: 20 }}>Rainbow Sandwich {'\n'}Sugarless</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <EvilIcons name="location" size={30} color="#6B50F6" />
                <Text style={styles.textRank}>19 km</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingLeft: 20 }}>
                <MaterialIcons name="star-half" size={30} color="#3FDA85" />
                <Text style={{ ...styles.textRank }}>4,8 Rating</Text>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.menuText}>Nulla occaecat velit laborum exercitation ullamco.
                Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
                Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.</Text>
              <FlatList style={{ marginVertical: 20 }}
                data={[
                  { key: 'Tokyo' },
                  { key: 'Delhi' },
                  { key: 'Shanghai' },
                ]}
                renderItem={({ item }) => <Text style={{ fontSize: 16 }}>{`\u2022 ${item.key}`}</Text>}
              />
              <Text style={styles.menuText}>Nulla occaecat velit laborum exercitation ullamco.
                Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
              </Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "800", marginBottom: 10 }}>Testimonials</Text>
              <FlatList
                data={reviewData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled={true}  
                style={{ maxHeight: 200 }}  
              />
          </View>
        </Animated.ScrollView>
        <TouchableOpacity style={styles.CTAbutton}>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 16, alignSelf: "center" }}>Add To Chart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    position: 'relative'

  },
  popular: {
    width: 100,
    height: 46,
    backgroundColor: "rgba(63, 218, 133, 0.1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"

  },
  statusIcon: {
    width: 46,
    borderRadius: 50,
    height: 46,
    justifyContent: 'center',
    alignItems: "center",

  },
  menuText: {
    fontSize: 18,
    lineHeight: 24
  },
  listItem: {
    fontSize: 16,
    lineHeight: 22,
  },
  CTAbutton: {
    alignSelf: "center",
    backgroundColor: "rgba(107, 80, 246, 1)",
    paddingVertical: 23,
    paddingHorizontal: 173,
    borderRadius: 15,
    position: "absolute",
    bottom: 10
  },
  banner: scrollA => ({
    height: height,
    width: "300%",
    transform: [{
      translateY: scrollA,
    },
    {
      scale: scrollA.interpolate({
        inputRange: [-height, 5, height, height + 2],
        outputRange: [3, 1, 1.5, 3]
      })
    }
    ]
  }),
  textRank: {
    fontSize: 20,
    opacity: 0.3
  }
})