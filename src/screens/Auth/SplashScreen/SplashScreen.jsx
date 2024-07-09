import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageTextContainer} className="flex items-center">
        <View>
          <Image
            style={Styles.image}
            source={require("../../../..//assets/mock_images/EShop-Logo/E_Shop _Logo_Icon.png")}
          />
        </View>
        <View>
          <Text style={Styles.text}>E-Shop</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  imageTextContainer: {
    marginTop: wp(20),
    padding: wp(10)
  },
  image: {
    width: wp(30),
    height: wp(25),
    resizeMode: "contain"
  },
  text: {
    fontSize: wp(5),
    fontWeight: "ultralight"
  }
});
