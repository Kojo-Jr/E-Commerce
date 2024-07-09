import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../../../screens/Categories/CategoriesScreen";

const CategoriesStack = createStackNavigator();
const CategoriesStackNavigator = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
    </CategoriesStack.Navigator>
  );
};

export default CategoriesStackNavigator;
