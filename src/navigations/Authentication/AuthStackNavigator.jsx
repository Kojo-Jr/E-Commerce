import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/Auth/SplashScreen/SplashScreen";

const AuthStack = createStackNavigator;
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
