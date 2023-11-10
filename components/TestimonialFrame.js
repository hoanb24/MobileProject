
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const TestimonialFrame = ({testimonial}) => {
  return (
        <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image style={{ width: 64, height: 64, borderRadius: 10 }} source={testimonial.image} />
        <View style={{ paddingLeft: 30 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "800" }}>{testimonial.author}</Text>
              <Text style={{ fontStyle: "italic", opacity: 0.3 }}>{testimonial.date}</Text>
            </View>
            <View style={{
              flexDirection: "row", marginRight: "20%", backgroundColor: "rgba(107, 80, 246, 0.1)",
              justifyContent: "center", alignItems: "center", paddingHorizontal: 10, borderRadius: 20,
            }}>
              <FontAwesome name="star" size={24} color="#6B50F6" />
              <Text style={{ paddingLeft: 5, fontSize: 24, color: "#6B50F6" }}>{testimonial.rating}</Text>
            </View>
          </View>
          <Text numberOfLines={2} style={{ paddingRight: 120, fontSize: 15, marginVertical: 10 }}>{testimonial.comment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TestimonialFrame;

const styles = StyleSheet.create({
  container: {
    width:"90",
    backgroundColor:"#E6E6FA",
    marginTop:10,
    marginBottom:10,
    shadowColor:"rgba(90, 108, 234, 0.07)",
    borderRadius:22,
    elevation:0.05,
  }

})