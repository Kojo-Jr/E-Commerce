import { StyleSheet, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import Featured from "../../../components/Cards/Featured";
import SearchBox from "../../../components/Textinputs/SearchBox";
import Banner from "../../../components/Cards/Banner";
import Products from "../../../components/Cards/Products";

const MainScreen = () => {
  return (
    <View style={Styles.mainScreenContainer}>
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              {/* SearchBox */}
              <SearchBox />

              {/* Banner Section */}
              <Banner />

              {/* Featured Products */}
              <Featured />

              {/* Products */}
              <Products />
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
