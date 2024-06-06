import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList } from "react-native";
import { categoriesData } from "./mockData/category.data";

export default function App() {
  return (
    <View // View Container
      style={{
        flex: 1,
        backgroundColor: "black",
        marginTop: 50,
        padding: 10
      }}
    >
      <FlatList //imported from react native
        data={categoriesData}
        renderItem={(category) => {
          return (
            <View
              style={{
                //styling the nested view
                backgroundColor: "white",
                borderRadius: 25,
                width: 155,
                height: 167,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image source={category.item.image} />
              <Text style={{ color: "black" }}>{category.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(category) => category.id}
        numColumns={2}
        contentContainerStyle={{ gap: 20, marginHorizontal: 20 }}
      />
    </View>
  );
}
