import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationHeader } from "../../../components/Headers";

const { width, height } = Dimensions.get("window");
const isPortrait = height > width;
const ViewProducts = ({ route }) => {
  const navigation = useNavigation();

  const navigatetoHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const { featuredImage, category, name, price, description } =
    route.params.params;
  return (
    <View className="flex-1 bg-orange-200">
      <StatusBar style="auto" />

      {/* Image Banner */}
      <View style={Styles.imageBanner}>
        <Image style={Styles.image} source={featuredImage} />

        {/* Navigation Header*/}
        <NavigationHeader
          headerTitle="E-Shop"
          IconComponent={AntDesign}
          iconName="hearto"
          iconSize={24}
          iconColor="black"
          handleNavigation={navigatetoHomeScreen}
        />
      </View>

      {/* Product Details */}
      <View className="bg-white rounded-t-3xl flex-1  ">
        <View className="mt-2 p-5 space-y-5">
          {/* Category */}
          <View>
            <Text className="text-[#5C9DFF]">{category}</Text>
          </View>
          <View>
            <Text className="font-medium text-3xl">{name}</Text>
          </View>
          {/* Rating */}
          <View className="bottom-4">
            <Image
              source={require("../../../../assets/mock_images/Rating/Ratings.png")}
            />
          </View>

          {/* Price */}
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="font-medium text-base">{price}</Text>
            </View>
            <View>
              <View className="flex-row items-center p-1 space-x-2 bg-[#FAFAFA] rounded-2xl">
                <TouchableOpacity>
                  <AntDesign name="minus" size={26} color="black" />
                </TouchableOpacity>
                <View>
                  <Text>1</Text>
                </View>
                <TouchableOpacity>
                  <Ionicons name="add" size={26} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Description */}
          <View>
            <Text className="text-base">{description}</Text>
          </View>
        </View>

        {/* Add To Cart */}
        <View className="flex-row self-center gap-5 p-3 top-10">
          <TouchableOpacity
            style={{ width: wp(20) }}
            className=" items-center border-0.5 border-[#000000] rounded-md p-3"
          >
            <Text className="font-medium">Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: wp(28) }}
            className=" items-center border-0.5 border-[#000000] rounded-md  p-3 text-base"
          >
            <Text className="font-medium text-base">Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: wp(25) }}
            className=" items-center bg-[#F96C05] rounded-md  p-3 "
          >
            <Text className="font-medium text-white text-base">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewProducts;

const Styles = StyleSheet.create({
  imageBanner: {
    height: wp(100)
  },
  image: {
    width: wp(50),
    height: wp(40),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: wp(35)
    // borderWidth: 1,
    // borderColor: "white"
  }
});
