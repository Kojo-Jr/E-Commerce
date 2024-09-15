import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedStackNavigator from "./Protected/ProtectedStackNavigator";
import AuthStackNavigator from "./Authentication/AuthStackNavigator";
import { useAuth, AuthProvider } from "../context/AuthContext/AuthContext";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RootNavigationContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="ProtectedStack"
          component={ProtectedStackNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AuthStack"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigationContent />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default RootNavigation;
