import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "../Protected/HomeStack/HomeStackNavigator";
import SearchScreen from "../../screens/Search/SearchScreen";
import Camera from "../../screens/Camera/Camera";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import FavouriteScreen from "../../screens/Favourite/FavouriteScreen";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // This hides the labels
        tabBarStyle: {
          //  add custom styles for the tab bar here
          backgroundColor: "white",
          height: 65,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={focused ? "orange" : "black"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="search1"
              size={size}
              color={focused ? "orange" : "black"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cameraDesign}>
              <AntDesign name="camerao" size={24} color="white" />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="hearto"
              size={size}
              color={focused ? "orange" : "black"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={focused ? "orange" : "black"}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  cameraDesign: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ff6600",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25 // Adjust this value to position the button correctly
  }
});
