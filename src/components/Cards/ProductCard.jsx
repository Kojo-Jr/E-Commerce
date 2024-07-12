import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ featuredImage, category, name, description, price }) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.productsContainer}>
      <View
        style={Styles.productsItemContainer}
        className="rounded-3xl flex flex-row"
      >
        <TouchableOpacity
          style={Styles.productsImageContainer}
          className="bg-orange-200 rounded-tl-3xl rounded-bl-3xl"
          onPress={() =>
            navigation.navigate("ViewProductsScreen", {
              params: {
                featuredImage,
                category,
                name,
                description,
                price
              }
            })
          }
        >
          <Image style={Styles.productsImage} source={featuredImage} />
        </TouchableOpacity>
        <View style={Styles.productsDetails} className="flex-row">
          <View className="gap-1">
            <Text className="text-lg font-medium">{name}</Text>
            <Text
              style={Styles.productsDescription}
              className="text-xs text-justify"
            >
              {description}
            </Text>
            <Text className="font-bold">{price}</Text>
            <Text className="hidden">{category}</Text>
          </View>
          <View>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const Styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    // marginTop: wp(1)
    alignSelf: "center"
  },
  productsHeaderText: {
    fontSize: wp(5),
    fontWeight: "500"
  },
  productsItemContainer: {
    width: wp(90),
    height: wp(35),
    backgroundColor: "white",
    marginTop: wp(2)
  },
  productsImageContainer: {
    width: wp(30),
    height: wp(35)
  },
  productsImage: {
    width: wp(30),
    height: wp(30),
    resizeMode: "contain"
  },
  productsDetails: {
    padding: wp(5)
  },
  productsDescription: {
    width: wp(43),
    color: "gray"
  }
});
