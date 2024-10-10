import { createStackNavigator } from "@react-navigation/stack";
import CategoriesStackNavigator from "./CategoriesStack/CategoriesStackNavigator";
import TabNavigation from "../TabNavigation/TabNavigation";

const ProtectedStack = createStackNavigator();
const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator initialRouteName="TabNavigation">
      <ProtectedStack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <ProtectedStack.Screen
        name="CategoryStack"
        component={CategoriesStackNavigator}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
