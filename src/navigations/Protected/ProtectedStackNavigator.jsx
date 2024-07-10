import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeStackNavigator from "./HomeStack/HomeStackNavigator";
import CategoriesStackNavigator from "./CategoriesStack/CategoriesStackNavigator";

const ProtectedStack = createStackNavigator();
const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator initialRouteName="HomeStack">
      <ProtectedStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />

      <ProtectedStack.Screen
        name="Categories"
        component={CategoriesStackNavigator}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
