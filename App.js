import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { featuredProducts } from "./mockData/featuredproducts.data";
import { productsData } from "./mockData/products.data";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: wp(10),
        padding: wp(5),
        backgroundColor: "#fafafa"
      }}
    >
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
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
                <View
                  style={{
                    padding: wp(3),
                    backgroundColor: "white",
                    borderRadius: wp(50),
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative"
                  }}
                >
                  <AntDesign name="shoppingcart" size={24} color="black" />
                  <View
                    style={{
                      height: wp(5),
                      width: wp(5),
                      backgroundColor: "red",
                      borderRadius: wp(50),
                      position: "absolute",
                      top: 0,
                      right: 0,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: wp(3.5),
                        color: "white"
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
                  marginTop: wp(5)
                }}
              >
                <Image
                  source={require("./assets/mock_images/products/banner.jpeg")}
                  style={{
                    height: wp(35),
                    width: wp(90),
                    borderRadius: wp(3)
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    padding: wp(7)
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: wp(5)
                    }}
                  >
                    50%
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: wp(5)
                    }}
                  >
                    Discount
                  </Text>
                  <Text
                    style={{
                      color: "white"
                    }}
                  >
                    Aug 21 - 26
                  </Text>
                </View>
              </View>

              {/* Featured Products */}
              <View
                style={{
                  marginTop: wp(10)
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontWeight: "500"
                    }}
                  >
                    Featured
                  </Text>
                  <Text>See all</Text>
                </View>
                <FlashList
                  data={featuredProducts}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        height: wp(59),
                        width: wp(45),
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: wp(2),
                        marginRight: wp(2)
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          borderTopLeftRadius: wp(2),
                          borderTopRightRadius: wp(2)
                        }}
                        className="bg-blue-200"
                      >
                        <Image
                          style={{
                            resizeMode: "contain",
                            width: wp(53),
                            height: wp(40)
                          }}
                          source={item.image}
                        />
                      </View>
                      <View
                        style={{
                          padding: wp(2)
                        }}
                      >
                        <Text
                          style={{
                            fontSize: wp(4),
                            fontWeight: "500"
                          }}
                        >
                          {item.name}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                          }}
                        >
                          <Text>{item.price}</Text>
                          <MaterialIcons
                            name="favorite-outline"
                            size={24}
                            color="black"
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  estimatedItemSize={200}
                  contentContainerStyle={{
                    backgroundColor: "white"
                  }}
                />
              </View>

              {/* Products */}
              <View
                style={{
                  flex: 1,
                  marginTop: wp(15)
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp(5),
                      fontWeight: "500"
                    }}
                  >
                    Products
                  </Text>
                  <Text>See all</Text>
                </View>
                <FlashList
                  data={productsData}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        width: wp(90),
                        height: wp(35),
                        backgroundColor: "white",
                        marginTop: wp(2)
                      }}
                      className="rounded-3xl flex flex-row"
                    >
                      <View
                        style={{
                          width: wp(30),
                          height: wp(35)
                        }}
                        className="bg-orange-200 rounded-tl-3xl rounded-bl-3xl"
                      >
                        <Image
                          style={{
                            width: wp(30),
                            height: wp(30),
                            resizeMode: "contain"
                          }}
                          source={item.image}
                        />
                      </View>
                      <View
                        style={{
                          padding: wp(5)
                        }}
                        className="flex-row"
                      >
                        <View className="gap-1">
                          <Text className="text-base font-medium">
                            {item.name}
                          </Text>
                          <Text
                            style={{
                              width: wp(43)
                            }}
                            className="text-xs text-justify"
                          >
                            {item.description}
                          </Text>
                          <Text className="font-bold">{item.price}</Text>
                        </View>
                        <View>
                          <AntDesign name="hearto" size={24} color="black" />
                        </View>
                      </View>
                    </View>
                  )}
                  estimatedItemSize={200}
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

export default App;
