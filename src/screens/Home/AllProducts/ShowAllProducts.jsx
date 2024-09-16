import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { useRoute } from "@react-navigation/native";
import { ProductCard } from "../../../components/Cards";
const ShowAllProducts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { products } = route.params; // Access the passed products data

  const homeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader headerTitle="Products" handleNavigation={homeScreen} />
      <View style={styles.flashlistContainer}>
        <FlashList
          data={products}
          renderItem={({ item }) => {
            return (
              <ProductCard
                featuredImage={item.image}
                category={item.category}
                name={item.name}
                price={item.price}
                description={item.description}
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
    // borderWidth: 1,
    // borderColor: "red",
    flexGrow: 1
  }
});
