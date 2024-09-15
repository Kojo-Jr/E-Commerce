import { View, Text, Image, StyleSheet } from "react-native";
import { React, useEffect } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // A timeout to navigate to the signup screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("SignUp");
    }, 3000);

    // To cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
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
