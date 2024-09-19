import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../../screens/Home/Main/MainScreen";
import ViewProducts from "../../../screens/Home/ViewProducts/ViewProducts";
import ShowAllProducts from "../../../screens/Home/AllProducts/ShowAllProducts";
import { CartProvider } from "../../../context/AuthContext/CartContext"; // Import CartProvider
import CartItems from "../../../screens/Home/CartItems/ CartItems";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    // Wrap the entire HomeStack.Navigator with CartProvider
    <CartProvider>
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
        <HomeStack.Screen
          name="SeeAllProductsScreen"
          component={ShowAllProducts}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CartScreen"
          component={CartItems}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </CartProvider>
  );
};

export default HomeStackNavigator;
