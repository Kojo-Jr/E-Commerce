import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { ProductCard } from "../../../components/Cards";
import { productsData } from "../../../../mockData/products.data";
const ShowAllProducts = () => {
  const navigation = useNavigation();
  const homeScreen = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader headerTitle="Products" handleNavigation={homeScreen} />
      <View style={styles.flashlistContainer}>
        <FlashList
          data={productsData}
          renderItem={({ item }) => {
            return (
              <ProductCard
                date={item.date}
                featuredImage={item.featuredImage}
                name={item.name}
                location={item.location}
              />
            );
          }}
          estimatedItemSize={80}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ShowAllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  flashlistContainer: {
    marginTop: wp(20),
    borderWidth: 1,
    borderColor: "red",
    flexGrow: 1
  }
});
