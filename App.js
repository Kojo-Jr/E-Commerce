import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { featuredProducts } from "./mockData/featuredproducts.data";
const App = () => {
  return (
    <View
      style={{ marginTop: wp(10), padding: wp(5) }}
      className="flex-1 bg-[#fafafa]"
    >
      <View className="flex-row items-center justify-between">
        <View>
          <TextInput
            placeholder="Search..."
            autoCapitalize={true}
            keyboardType="email-address"
            style={{
              borderWidth: 1,
              borderColor: "white",
              borderRadius: wp(10),
              padding: wp(3),
              width: wp("70%"),
              backgroundColor: "white"
            }}
          />
        </View>
        <View
          style={{
            padding: wp(3)
          }}
          className="bg-white rounded-full items-center justify-center"
        >
          <View>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
          <View
            style={{ height: wp(5), width: wp(5) }}
            className="absolute top-0 right-0 bg-red-500 rounded-full"
          >
            <Text
              style={{
                fontSize: wp(3.5),
                left: wp(1.5),
                color: "white",
                alignItems: "center"
              }}
            >
              3
            </Text>
          </View>
        </View>
      </View>

      {/* Banner Section */}
      <View
        style={{
          top: wp(5)
        }}
      >
        <View>
          <Image
            source={require("./assets/mock_images/products/banner.jpeg")}
            style={{
              height: wp(35),
              width: wp(90)
            }}
            className="rounded-3xl"
          />
        </View>
        <View className="absolute right-0" style={{ padding: wp(7) }}>
          <Text className="text-white text-2xl">50%</Text>
          <Text className="text-white text-2xl">Discount</Text>
          <Text className="text-white font-extralight">Aug 21 - 26</Text>
        </View>
      </View>

      {/* Features Product */}
      <View
        style={{
          flex: 1,
          top: wp(10)
        }}
      >
        <Text
          style={{ fontSize: wp(5) }}
          className="font-medium tracking-widest"
        >
          Featured
        </Text>

        <FlashList
          data={featuredProducts}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  height: wp(59),
                  width: wp(45)
                }}
                className="border border-white rounded-2xl"
              >
                <View className="bg-blue-100 flex items-center justify-center rounded-t-2xl">
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: wp(53),
                      height: wp(40)
                    }}
                    source={item.image}
                  />
                </View>

                <View style={{ padding: wp(2), gap: wp(2) }}>
                  <Text className="font-medium text-lg">{item.name}</Text>

                  <View className="flex flex-row items-center justify-between">
                    <Text>{item.price}</Text>

                    <MaterialIcons
                      name="favorite-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={200}
          contentContainerStyle={{ backgroundColor: "white" }}
        />
      </View>
    </View>
  );
};

export default App;
