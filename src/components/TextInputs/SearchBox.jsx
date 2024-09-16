import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const SearchBox = () => {
  const [display, setDisplay] = useState(false);
  return (
    <View style={Styles.searchBar}>
      <View>
        <TextInput
          placeholder="Search..."
          autoCapitalize={true}
          keyboardType="default"
          style={Styles.textInput}
        />
      </View>

      <View style={Styles.cartContainer}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <View style={Styles.cartBadge}>
          <Text style={Styles.cartBadgeText}>3</Text>
        </View>
      </View>
    </View>
  );
};
export default SearchBox;

const Styles = StyleSheet.create({
  searchBar: {
    marginTop: wp(5),
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    gap: wp(5)
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: wp(10),
    padding: wp(3),
    width: wp("70%"),
    backgroundColor: "white"
  },
  cartContainer: {
    padding: wp(3),
    backgroundColor: "white",
    borderRadius: wp(50),
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  cartBadge: {
    height: wp(5),
    width: wp(5),
    backgroundColor: "red",
    borderRadius: wp(50),
    position: "absolute",
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  cartBadgeText: {
    fontSize: wp(3.5),
    color: "white"
  }
});
