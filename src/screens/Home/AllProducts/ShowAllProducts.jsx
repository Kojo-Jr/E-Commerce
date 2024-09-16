import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ShowAllProducts = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

export default ShowAllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  }
});
