import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { featuredProducts } from "../../../mockData/featuredproducts.data";

const FeaturedCard = () => {
  return (
    <View style={Styles.featuredContainer}>
      <View style={Styles.featuredHeader}>
        <Text style={Styles.featuredHeaderText} className="tracking-wider">
          Featured
        </Text>
        <Text>See all</Text>
      </View>
      <FlashList
        data={featuredProducts}
        renderItem={({ item }) => (
          <View style={Styles.featuredContent}>
            <TouchableOpacity
              style={Styles.featuredImageContainer}
              className="bg-blue-200"
            >
              <Image style={Styles.featuredImage} source={item.image} />
            </TouchableOpacity>
            <View style={Styles.featuredInfo}>
              <Text style={Styles.featuredName}>{item.name}</Text>
              <View style={Styles.featuredPriceContainer}>
                <Text>{item.price}</Text>
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default FeaturedCard;

const Styles = StyleSheet.create({
  featuredContainer: {
    marginTop: wp(10)
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
