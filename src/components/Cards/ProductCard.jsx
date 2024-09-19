import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCard = ({ featuredImage, category, name, description, price }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const [isFavourite, setIsFavourite] = useState(false);

  const products = { featuredImage, category, name, description, price }; // Add product to favourites

  const loadFavouriteStatus = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem("favourites");
      const favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
      setIsFavourite(favourites.some((fav) => fav.name === name));
    } catch (error) {
      console.log("Error loading favourites: ", error);
    }
  };

  const saveFavourites = async (newFavourites) => {
    try {
      await AsyncStorage.setItem("favourites", JSON.stringify(newFavourites));
    } catch (error) {
      console.log("Error saving favourites: ", error);
    }
  };

  const toggleFavourite = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem("favourites");
      const favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
      let newFavourites;

      if (isFavourite) {
        // Remove from favourites
        newFavourites = favourites.filter((fav) => fav.name !== name);
      } else {
        // Add to favourites
        newFavourites = [...favourites, products];
      }

      setIsFavourite(!isFavourite);
      saveFavourites(newFavourites);
    } catch (error) {
      console.log("Error toggling favourite: ", error);
    }
  };

  useEffect(() => {
    loadFavouriteStatus();
  }, []);

  return (
    <View
      style={[
        styles.productsContainer,
        { padding: isPortrait ? wp(2) : wp(4) }
      ]}
    >
      <View style={styles.productsItemContainer}>
        <TouchableOpacity
          style={styles.productsImageContainer}
          onPress={() =>
            navigation.navigate("ViewProductsScreen", {
              products: products // Pass the product object
            })
          }
        >
          <Image style={styles.productsImage} source={featuredImage} />
        </TouchableOpacity>
        <View style={styles.productsDetails}>
          <View>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productsDescription}>{description}</Text>
            <Text style={styles.productPrice}>{price}</Text>
          </View>
          <TouchableOpacity onPress={toggleFavourite}>
            <AntDesign
              name={isFavourite ? "heart" : "hearto"}
              size={24}
              color={isFavourite ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    alignSelf: "center"
  },
  productsItemContainer: {
    width: wp(90),
    height: hp(20),
    backgroundColor: "white",
    borderRadius: wp(3),
    flexDirection: "row",
    marginBottom: wp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },
  productsImageContainer: {
    width: wp(30),
    height: hp(20),
    backgroundColor: "#ffecd2",
    borderTopLeftRadius: wp(3),
    borderBottomLeftRadius: wp(3),
    justifyContent: "center",
    alignItems: "center"
  },
  productsImage: {
    width: wp(28),
    height: hp(15),
    resizeMode: "contain",
    borderRadius: wp(2)
  },
  productsDetails: {
    flex: 1,
    padding: wp(4),
    justifyContent: "space-between",
    flexDirection: "row"
  },
  productName: {
    fontSize: wp(5),
    fontWeight: "600"
  },
  productsDescription: {
    fontSize: wp(3),
    color: "gray",
    marginTop: wp(1),
    width: wp(40),
    textAlign: "justify"
  },
  productPrice: {
    fontSize: wp(4),
    fontWeight: "bold",
    marginTop: wp(2)
  }
});
