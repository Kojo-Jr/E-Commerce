import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { featuredProducts } from "../../../mockData/featuredproducts.data";
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({ featuredImage, name, price, description }) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.featuredContainer}>
      <View style={Styles.featuredContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewProductsScreen", {
              params: {
                featuredImage,
                name,
                price,
                description
              }
            })
          }
          style={Styles.featuredImageContainer}
          className="bg-blue-200"
        >
          <Image style={Styles.featuredImage} source={featuredImage} />
        </TouchableOpacity>
        <View style={Styles.featuredInfo}>
          <Text style={Styles.featuredName}>{name}</Text>
          <View style={Styles.featuredPriceContainer}>
            <Text>{price}</Text>
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          </View>
          <View className="hidden">
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedCard;

const Styles = StyleSheet.create({
  featuredContainer: {
    marginTop: wp(1)
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  featuredHeaderText: {
    fontSize: wp(5),
    fontWeight: "500"
  },
  featuredContent: {
    height: wp(59),
    width: wp(45),
    borderWidth: 1,
    borderColor: "white",
    marginTop: wp(2),
    marginRight: wp(2),
    borderRadius: wp(5)
  },
  featuredImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5)
  },
  featuredImage: {
    resizeMode: "contain",
    width: wp(53),
    height: wp(40)
  },
  featuredInfo: {
    padding: wp(3.9),
    backgroundColor: "white",
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5)
  },
  featuredName: {
    fontSize: wp(4),
    fontWeight: "500"
  },
  featuredPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
