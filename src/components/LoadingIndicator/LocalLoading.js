import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const LocalLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text>Creating account...</Text>
    </View>
  );
};

export default LocalLoading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
