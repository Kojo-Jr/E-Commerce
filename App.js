import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList } from "react-native";
import { categoriesData } from "./mockData/category.data";

export default function App() {
  const height = 180;
  const width = 180;
  return (
    <View // View Container
      style={{
        flex: 1,
        backgroundColor: "black",
        marginTop: 50,
        padding: 10
      }}
    >
      <FlatList
        data={categoriesData}
        renderItem={(category) => {
          <View></View>;
        }}
      />
    </View>
  );
}
