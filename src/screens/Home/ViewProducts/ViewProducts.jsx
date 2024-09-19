import { React, useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationHeader } from "../../../components/Headers";
import { CartContext } from "../../../context/AuthContext/CartContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewProducts = ({ route }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const { addToCart } = useContext(CartContext); // Get the addToCart function from context
  const [display, setDisplay] = useState(0);

  const increaseQuantity = () => {
    setDisplay((prevDisplay) => prevDisplay + 1);
  };
  const decreaseQuantity = () => {
    if (display > 1) {
      setDisplay((prevDisplay) => prevDisplay - 1);
    }
  };

  const handleAddToCart = () => {
    if (display > 0) {
      addToCart(display); // Pass the selected quantity back to parent
      Alert.alert("Added to cart");
      setDisplay(0);
    } else {
      Alert.alert("Please select quantity");
    }
  };

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const { products } = route.params;
  const { featuredImage, category, name, price, description } = products;

  const [isFavourite, setIsFavourite] = useState(false); // State for favourite
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <NavigationHeader
          headerTitle="E-Shop"
          IconComponent={AntDesign}
          iconName={isFavourite ? "heart" : "hearto"}
          iconSize={24}
          iconColor={isFavourite ? "red" : "black"}
          handleNavigation={navigateToHomeScreen}
          toggleFavourite={toggleFavourite}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={featuredImage} />
      </View>

      <View style={styles.productDetails}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.name}>{name}</Text>
          <Image
            style={styles.ratingImage}
            source={require("../../../../assets/mock_images/Rating/Ratings.png")}
          />

          <View style={styles.priceQuantityContainer}>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <AntDesign name="minus" size={40} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{display}</Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <Ionicons name="add" size={40} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.description}>{description}</Text>
        </ScrollView>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.chatButton]}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.addToCartButton]}
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={[styles.buttonText, styles.buyNowText]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFA500",
    backgroundColor: "#ffecd2"
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10
  },
  imageContainer: {
    height: hp(60),
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: wp(50),
    height: wp(40),
    resizeMode: "contain"
  },
  productDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp(50),
    padding: wp(5)
  },
  scrollView: {
    marginBottom: hp(10)
  },
  category: {
    color: "#5C9DFF",
    marginBottom: hp(1)
  },
  name: {
    fontSize: wp(6),
    fontWeight: "bold",
    marginBottom: hp(1)
  },
  ratingImage: {
    marginBottom: hp(2)
  },
  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2)
  },
  price: {
    fontSize: wp(4),
    fontWeight: "bold"
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 15,
    padding: wp(1)
  },
  quantityText: {
    marginHorizontal: wp(2)
  },
  description: {
    fontSize: wp(3.5)
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: hp(2),
    left: wp(5),
    right: wp(5)
  },
  button: {
    padding: wp(3),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  chatButton: {
    borderWidth: 1,
    borderColor: "#000000",
    width: wp(20)
  },
  addToCartButton: {
    borderWidth: 1,
    borderColor: "#000000",
    width: wp(28)
  },
  buyNowButton: {
    backgroundColor: "#F96C05",
    width: wp(25)
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: wp(3.5)
  },
  buyNowText: {
    color: "white"
  }
});

export default ViewProducts;
