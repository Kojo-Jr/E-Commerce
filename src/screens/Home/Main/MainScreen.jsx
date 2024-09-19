import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import SearchBox from "../../../components/TextInputs/SearchBox";
import {
  BannerCard,
  FeaturedCard,
  ProductCard
} from "../../../components/Cards";
import { featuredProducts } from "../../../../mockData/featuredproducts.data";
import { MiniHeader } from "../../../components/Headers";
import { productsData } from "../../../../mockData/products.data";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import LoadingIndicator from "../../../components/LoadingIndicator/LoadingIndicator";

const MainScreen = () => {
  const navigation = useNavigation();

  const seeAllFeaturedProducts = () => {
    navigation.navigate("SeeAllProductsScreen", {
      products: featuredProducts, // Pass only featured products
      title: "Featured Products" // Add title for clarity
    });
  };

  const seeAllProducts = () => {
    navigation.navigate("SeeAllProductsScreen", {
      products: productsData, // Pass only all products
      title: "All Products" // Add title for clarity
    });
  };

  const [isLoading, setIsLoading] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true); // Reset loading state each time the screen is focused

      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false when data is ready
      });

      return () => clearTimeout(timer);
    }, [])
  );

  if (isLoading) {
    return (
      <View style={Styles.loadingContainer}>
        <LoadingIndicator />
      </View>
    );
  }
  return (
    <View style={Styles.mainScreenContainer}>
      <StatusBar style="auto" />
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View style={Styles.listHeaderContainer}>
              {/* SearchBox */}
              <SearchBox />

              {/* Banner Card */}
              <BannerCard />

              {/* Mini Header */}
              <MiniHeader
                title="Featured"
                navigationText="See all"
                handleNavigation={seeAllFeaturedProducts}
              />

              {/* Featured Card */}
              <FlashList
                data={featuredProducts}
                renderItem={({ item }) => (
                  <FeaturedCard
                    featuredImage={item.image}
                    category={item.category}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                  />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                estimatedItemSize={40}
              />

              {/* Mini Header */}
              <MiniHeader
                title="Products"
                navigationText="See all"
                handleNavigation={seeAllProducts}
              />

              {/* Product Card */}
              <View style={{ flexGrow: 1, flexDirection: "row" }}>
                <FlashList
                  data={productsData}
                  renderItem={({ item }) => (
                    <ProductCard
                      featuredImage={item.image}
                      category={item.category}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  )}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  estimatedItemSize={40}
                />
              </View>
            </View>
          );
        }}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MainScreen;

const Styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    padding: wp(1.5),
    backgroundColor: "#fafafa"
  },
  listHeaderContainer: {
    flexGrow: 1,
    marginTop: wp(5)
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
