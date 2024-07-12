import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText }) => {
  return (
    <View style={Styles.featuredHeader}>
      <Text style={Styles.featuredHeaderText} className="tracking-wider">
        {title}
      </Text>
      <Text>{navigationText}</Text>
    </View>
  );
};

export default MiniHeader;

const Styles = StyleSheet.create({
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp(6),
    padding: wp(2)
  },
  featuredHeaderText: {
    fontSize: wp(5),
    fontWeight: "500"
  }
});
