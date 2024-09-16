import { View, StyleSheet } from "react-native";
import { React, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { useRoute } from "@react-navigation/native";
import { ProductCard } from "../../../components/Cards";
import LoadingIndicator from "../../../components/LoadingIndicator/LoadingIndicator";
const ShowAllProducts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { products } = route.params; // Access the passed products data

  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching with useEffect
  useEffect(() => {
    // Simulate an API call or a delay before loading is complete
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false when data is ready
    }, 2000); // 2-second delay (you can remove this if data is already available)

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const homeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader headerTitle="Products" handleNavigation={homeScreen} />

      {isLoading ? (
        // Show loading indicator while data is loading
        <View style={styles.loadingContainer}>
          <LoadingIndicator />
        </View>
      ) : (
        // Show the FlashList once data is loaded
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
      )}
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
    flexGrow: 1
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
