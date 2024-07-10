import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../../screens/Home/Main/MainScreen";
import ViewProducts from "../../../screens/Home/ViewProducts/ViewProducts";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ViewProductsScreen"
        component={ViewProducts}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
