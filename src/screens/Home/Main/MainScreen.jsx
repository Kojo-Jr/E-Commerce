import { StyleSheet, View } from "react-native";
import React from "react";
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

const MainScreen = () => {
  return (
    <View style={Styles.mainScreenContainer}>
      <StatusBar style="auto" />
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              {/* SearchBox */}
              <SearchBox />

              {/* Banner Card */}
              <BannerCard />

              {/* Mini Header */}
              <MiniHeader title="Featured" navigationText="See all" />

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
              <MiniHeader title="Products" navigationText="See all" />

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
    marginTop: wp(5),
    padding: wp(1.5),
    backgroundColor: "#fafafa"
  }
});
