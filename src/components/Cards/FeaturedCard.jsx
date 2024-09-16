import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FeaturedCard = ({
  featuredImage,
  category,
  name,
  price,
  description
}) => {
  const navigation = useNavigation();

  const [isFavourite, setIsFavourite] = useState(false); // State for favourite

  // Unique key for this product's favourite status in AsyncStorage
  const storageKey = `favourite-${name}`;

  // Function to load the favourite state from AsyncStorage
  const loadFavouriteStatus = async () => {
    try {
      const storedStatus = await AsyncStorage.getItem(storageKey);
      if (storedStatus !== null) {
        setIsFavourite(storedStatus === "true");
      }
    } catch (error) {
      console.log("Error loading favourite status: ", error);
    }
  };

  // Save the favourite state to AsyncStorage
  const saveFavouriteStatus = async (value) => {
    try {
      await AsyncStorage.setItem(storageKey, String(value));
    } catch (error) {
      console.log("Error saving favourite status: ", error);
    }
  };

  // Toggle favourite status
  const toggleFavourite = () => {
    const newFavouriteStatus = !isFavourite; // Toggle favourite
    setIsFavourite(newFavouriteStatus); // Update state
    saveFavouriteStatus(newFavouriteStatus); // Persist the new state
  };

  // Load the favourite status when the component mounts
  useEffect(() => {
    loadFavouriteStatus();
  }, []);

  return (
    <View style={Styles.featuredContainer}>
      <View style={Styles.featuredContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewProductsScreen", {
              params: { featuredImage, category, name, price, description }
            })
          }
          style={Styles.featuredImageContainer}
          className="bg-blue-200"
        >
          <Image style={Styles.featuredImage} source={featuredImage} />
        </TouchableOpacity>
        <View style={Styles.featuredInfo}>
          <Text className="hidden">{category}</Text>
          <Text style={Styles.featuredName}>{name}</Text>
          <View style={Styles.featuredPriceContainer}>
            <Text>{price}</Text>
            <TouchableOpacity onPress={toggleFavourite}>
              <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={24}
                color={isFavourite ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
          <View className="hidden">
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedCard;

const Styles = StyleSheet.create({
  featuredContainer: {
    // marginTop: wp(1)
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  featuredHeaderText: {
    fontSize: wp(5),
    fontWeight: "500"
  },
  featuredContent: {
    height: wp(59),
    width: wp(45),
    borderWidth: 1,
    borderColor: "white",
    // marginTop: wp(),
    marginRight: wp(2),
    borderRadius: wp(5),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // For Android
    backgroundColor: "white" // Ensure the background color is maintained
  },
  featuredImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5)
  },
  featuredImage: {
    resizeMode: "contain",
    width: wp(53),
    height: wp(40)
  },
  featuredInfo: {
    padding: wp(3.9),
    backgroundColor: "white",
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5)
  },
  featuredName: {
    fontSize: wp(4),
    fontWeight: "500"
  },
  featuredPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
