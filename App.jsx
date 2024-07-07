import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/Home/Main/MainScreen";
import LaunchScreen from "./src/screens/Home/Main/Launch Screen/LaunchScreen";
import CategoriesScreen from "./src/screens/Home/Categories/categoriesScreen";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountStack}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const LaunchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Launch Screen"
      component={LaunchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const CategoriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Categories Screen"
      component={CategoriesScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={AccountStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Launch"
          component={LaunchStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Categories"
          component={CategoriesStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
