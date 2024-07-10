import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { categoriesData } from "../../../mockData/category.data";

const CategoriesScreen = () => {
  return (
    <View // View Container
      style={{
        flex: 1,
        backgroundColor: "#FAFAFA",
        marginTop: 50,
        padding: 10
      }}
    >
      <FlatList //imported from react native
        data={categoriesData}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                //styling the nested view
                backgroundColor: "white",
                borderRadius: 25,
                width: 155,
                height: 167,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image source={item.image} />
              <Text style={{ color: "black" }}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap: 20, marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesScreen;
