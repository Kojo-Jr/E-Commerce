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

const MainScreen = () => {
  return (
    <View style={Styles.mainScreenContainer}>
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              {/* SearchBox */}
              <SearchBox />

              {/* Banner Card */}
              <BannerCard />

              {/* Featured Card */}
              <FeaturedCard />

              {/* Product Card */}
              <ProductCard />
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
    padding: wp(5),
    backgroundColor: "#fafafa"
  }
});
