import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NavigationHeader } from "../../../components/Headers";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const Login = () => {
  const navigation = useNavigation();
  const navigatetoSplashSCreen = () => {
    navigation.navigate("SplashScreen");
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="h-20">
        {/* Use the Navigation Header and pass in the props */}
        <NavigationHeader
          headerTitle="Log In"
          handleNavigation={navigatetoSplashSCreen}
        />
      </View>

      {/* Logo and App Name */}
      <View className="self-center items-center mt-10">
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/mock_images/EShop-Logo/E_Shop _Logo_Icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/mock_images/EShop-Logo/Logo-Text.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Buttons: Google and Facebook */}

      <View className="self-center flex-row mt-12 space-x-7">
        <TouchableOpacity className="bg-[#E1422F] w-44 h-12 flex-row items-center justify-center space-x-2 p-2 rounded-md">
          <Image
            source={require("../../../../assets/mock_images/Logos/GoogleLogo.png")}
          />
          <Text className="text-white text-base">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#2C65D8] w-44 h-12 flex-row items-center justify-center space-x-2 p-2 rounded-md">
          <Image
            source={require("../../../../assets/mock_images/Logos/FacebookLogo.png")}
          />
          <Text className="text-white text-base">FaceBook</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}

      <View className="p-5 space-y-6">
        {/* Email */}
        <View className="space-y-2">
          <Text className="font-medium">Email</Text>
          <TextInput
            style={{
              width: wp(90),
              padding: wp(2.5)
            }}
            className="bg-[#FAFAFA] w-48 rounded-md"
            placeholder="example@gmail.com"
          />
        </View>

        {/* Password */}
        <View className="space-y-2">
          <Text className="font-medium">Password</Text>
          <TextInput
            style={{
              width: wp(90),
              padding: wp(2.5)
            }}
            className="bg-[#FAFAFA] w-48 rounded-md"
            placeholder="Password"
          />
        </View>

        {/* Sign Up Button */}
        <View style={{ top: wp(5) }} className=" self-center">
          <TouchableOpacity className="bg-[#F96C05] items-center p-3 w-80 rounded-md">
            <Text className="text-[#FFFFFF] text-base"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <View className="self-center mt-3">
        <Text className="font-normal">Forgot Password?</Text>
      </View>

      {/* Recovery Message */}

      <View
        style={{ marginTop: wp(10) }}
        className="self-center flex-row space-x-2"
      >
        <View>
          <Text>Don't have an account?</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#F96C05]">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
