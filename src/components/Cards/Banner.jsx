import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Banner = () => {
  return (
    <View style={Styles.bannerContainer}>
      <Image
        source={require("../../../assets/mock_images/products/Banner/banner.jpeg")}
        style={Styles.imageStyle}
      />
      <View style={Styles.bannerTextContainer}>
        <Text style={Styles.bannerText}>50%</Text>
        <Text style={Styles.bannerText}>Discount</Text>
        <Text style={Styles.bannerSubText}>Aug 21 - 26</Text>
      </View>
    </View>
  );
};

export default Banner;

const Styles = StyleSheet.create({
  bannerContainer: {
    marginTop: wp(5)
  },
  imageStyle: {
    height: wp(35),
    width: wp(90),
    borderRadius: wp(3)
  },
  bannerTextContainer: {
    position: "absolute",
    right: 0,
    padding: wp(7)
  },
  bannerText: {
    color: "white",
    fontSize: wp(5)
  },
  bannerSubText: {
    color: "white"
  }
});
