import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";

const ShowAllProducts = () => {
  const navigation = useNavigation();
  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <NavigationHeader
        headerTitle="All Products"
        handleNavigation={navigateToHomeScreen}
      />
    </View>
  );
};

export default ShowAllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
