import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { productsData } from "../../../mockData/products.data";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

const ProductCard = () => {
  return (
    <View style={Styles.productsContainer}>
      <View style={Styles.productsHeader}>
        <Text style={Styles.productsHeaderText} className="tracking-wider">
          Products
        </Text>
        <Text>See all</Text>
      </View>
      <FlashList
        data={productsData}
        renderItem={({ item }) => (
          <View
            style={Styles.productsItemContainer}
            className="rounded-3xl flex flex-row"
          >
            <TouchableOpacity
              style={Styles.productsImageContainer}
              className="bg-orange-200 rounded-tl-3xl rounded-bl-3xl"
            >
              <Image style={Styles.productsImage} source={item.image} />
            </TouchableOpacity>
            <View style={Styles.productsDetails} className="flex-row">
              <View className="gap-1">
                <Text className="text-lg font-medium">{item.name}</Text>
                <Text
                  style={Styles.productsDescription}
                  className="text-xs text-justify"
                >
                  {item.description}
                </Text>
                <Text className="font-bold">{item.price}</Text>
              </View>
              <View>
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
          </View>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default ProductCard;

const Styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    marginTop: wp(15)
  },
  productsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
