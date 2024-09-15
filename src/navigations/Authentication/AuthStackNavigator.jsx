import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/Auth/SplashScreen/SplashScreen";
import SignUp from "../../screens/Auth/SignUp/SignUp";
import Login from "../../screens/Auth/LogIn/Login";

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SplashScreen">
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
