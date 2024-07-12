import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import CheckBox from "react-native-check-box";
const SignUp = () => {
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
          headerTitle="Sign Up"
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
      <View className="self-center mt-5">
        <Text>Or</Text>
      </View>

      {/* Form */}

      <View className="p-5 space-y-3">
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

        {/* Username */}
        <View className="space-y-2">
          <Text className="font-medium">Username</Text>
          <TextInput
            style={{
              width: wp(90),
              padding: wp(2.5)
            }}
            className="bg-[#FAFAFA] w-48 rounded-md"
            placeholder="John Smith"
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

        {/* CheckBox */}
        <View className="flex-row items-center top-5 ">
          <CheckBox onClick={() => {}} />
          <Text>Terms and Conditions</Text>
        </View>

        {/* Sign Up Button */}
        <View className="top-10 self-center">
          <TouchableOpacity className="bg-[#F96C05] items-center p-3 w-80 rounded-md">
            <Text className="text-[#FFFFFF] text-base">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
