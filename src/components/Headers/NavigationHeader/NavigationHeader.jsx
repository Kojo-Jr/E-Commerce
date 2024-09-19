import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const NavigationHeader = ({
  headerTitle,
  IconComponent,
  iconName,
  iconColor,
  iconSize,
  handleNavigation,
  toggleFavourite
}) => {
  return (
    <View
      style={Styles.navigationHeader}
      className="absolute top-14 flex-row self-center items-center"
    >
      <TouchableOpacity onPress={handleNavigation}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text className="font-medium text-xl">{headerTitle}</Text>
      </View>
      <TouchableOpacity onPress={toggleFavourite}>
        {IconComponent && (
          <IconComponent name={iconName} size={iconSize} color={iconColor} />
        )}
        {/* <AntDesign name="hearto" size={24} color="black" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default NavigationHeader;

const Styles = StyleSheet.create({
  navigationHeader: {
    gap: wp(30)
  }
});
