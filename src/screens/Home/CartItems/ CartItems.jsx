import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
const CartItems = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <NavigationHeader
        headerTitle={"Cart"}
        handleNavigation={goBack}
        IconComponent={Feather}
        iconName="more-vertical"
        iconSize={24}
        iconColor="black"
      />
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
