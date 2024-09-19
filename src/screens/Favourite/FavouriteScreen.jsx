import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationHeader } from "../../components/Headers";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const FavouriteScreen = () => {
  const navigation = useNavigation();
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to navigate to product details screen
  const navigateToProductDetails = (item) => {
    navigation.navigate("Home", {
      screen: "ViewProductsScreen", // Navigates to the product detail screen
      params: { products: item } // Passing the item as a param
    });
  };

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Load favourites from AsyncStorage
  const loadFavourites = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem("favourites");
      if (storedFavourites !== null) {
        setFavourites(JSON.parse(storedFavourites)); // Parse and set the favourites
      } else {
        setFavourites([]); // Set an empty array if no favourites found
      }
    } catch (error) {
      console.log("Error loading favourites: ", error);
    }
  };

  // useFocusEffect runs every time the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true); // Reset loading state each time the screen is focused

      const timer = setTimeout(() => {
        loadFavourites(); // Load favourites
        setIsLoading(false); // Set loading to false once data is loaded
      }, 500);

      return () => clearTimeout(timer); // Cleanup timer
    }, [])
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <LoadingIndicator />
      </View>
    );
  }

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.favouriteItem}
      onPress={() => navigateToProductDetails(item)} // Pass the individual item here
    >
      <Image style={styles.image} source={item.featuredImage} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>
          {truncateText(item.description, 40)}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader
        headerTitle={"Favourite"}
        handleNavigation={() => navigation.navigate("Home")}
      />
      <View style={styles.favouriteListContainer}>
        {favourites.length > 0 ? (
          <FlatList
            data={favourites}
            renderItem={renderFavouriteItem}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noFavouritesText}>No favourites yet.</Text>
        )}
      </View>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2), // Responsive horizontal padding
    paddingVertical: hp(2) // Responsive vertical padding
  },
  favouriteListContainer: {
    marginTop: hp(8), // Margin responsive to screen height
    padding: wp(2) // Responsive padding
  },
  favouriteItem: {
    flexDirection: "row",
    padding: wp(3), // Responsive padding for items
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center"
  },
  image: {
    width: wp(20), // Responsive image width
    height: hp(10), // Responsive image height
    resizeMode: "contain",
    marginRight: wp(4) // Responsive margin between image and text
  },
  name: {
    fontSize: wp(4.5), // Responsive font size for the product name
    fontWeight: "600"
  },
  description: {
    fontSize: wp(3.5), // Responsive font size for the product description
    color: "gray",
    marginTop: hp(0.5)
  },
  price: {
    fontSize: wp(4), // Responsive font size for the product price
    fontWeight: "bold",
    marginTop: hp(1)
  },
  noFavouritesText: {
    fontSize: wp(4.5), // Responsive font size for "No favourites" text
    textAlign: "center",
    marginTop: hp(10)
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
