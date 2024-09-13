import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  SafeAreaView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationHeader } from "../../../components/Headers";

const ViewProducts = ({ route }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const navigateToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const { featuredImage, category, name, price, description } =
    route.params.params;

  return (
    <SafeAreaView style={styles.container} className="bg-orange-200">
      <StatusBar style="light" />

      <View style={styles.header}>
        <NavigationHeader
          headerTitle="E-Shop"
          IconComponent={AntDesign}
          iconName="hearto"
          iconSize={24}
          iconColor="white"
          handleNavigation={navigateToHomeScreen}
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
              <TouchableOpacity>
                <AntDesign name="minus" size={26} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity>
                <Ionicons name="add" size={26} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.description}>{description}</Text>
        </ScrollView>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.chatButton]}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
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
    flex: 1
    // backgroundColor: "#FFA500"
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
