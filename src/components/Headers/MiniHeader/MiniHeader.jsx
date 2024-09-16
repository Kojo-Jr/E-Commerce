import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText, handleNavigation }) => {
  return (
    <View style={Styles.featuredHeader}>
      <Text style={Styles.featuredHeaderText} className="tracking-wider">
        {title}
      </Text>
      <Pressable onPress={handleNavigation}>
        <Text style={Styles.navigationText}>{navigationText}</Text>
      </Pressable>
    </View>
  );
};

export default MiniHeader;

const Styles = StyleSheet.create({
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp(4),
    padding: wp(2)
  },
  featuredHeaderText: {
    fontSize: wp(5),
    fontWeight: "500"
  },
  navigationText: {
    fontSize: wp(4)
  }
});
