import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationHeader } from "../../../components/Headers";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import CheckBox from "react-native-check-box";
import { useAuth } from "../../../context/AuthContext/AuthContext";
import LocalLoading from "../../../components/LoadingIndicator/LocalLoading";

const SignUp = () => {
  const { signIn } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (text) => setEmail(text);
  const handleUsernameChange = (text) => setUsername(text);
  const handlePasswordChange = (text) => setPassword(text);
  const handleConfirmPasswordChange = (text) => setConfirmPassword(text);

  const renderConfirmPassword = () => {
    if (password.length > 5) {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm password"
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </View>
      );
    }
  };

  const handleSignUp = async () => {
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Alert.alert("Error", "Please fill in all the fields");
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
    } else {
      setLocalLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Alert.alert("Success", "Account created successfully");
        signIn();
      } catch (error) {
        Alert.alert("Error", "Failed to create an account");
      } finally {
        setLocalLoading(false);
      }
    }
  };

  if (localLoading) {
    return <LocalLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <NavigationHeader headerTitle="Sign Up" />
        </View>

        <View style={styles.logoContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/mock_images/EShop-Logo/E_Shop _Logo_Icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/mock_images/EShop-Logo/Logo-Text.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Image
              source={require("../../../../assets/mock_images/Logos/GoogleLogo.png")}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}
          >
            <Image
              source={require("../../../../assets/mock_images/Logos/FacebookLogo.png")}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              placeholder="example@gmail.com"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={handleUsernameChange}
              placeholder="John Smith"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>

          {renderConfirmPassword()}

          <View style={styles.checkboxContainer}>
            <CheckBox onClick={() => {}} />
            <Text style={styles.checkboxText}>Terms and Conditions</Text>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: hp("5%")
  },
  header: {
    height: hp("8%")
  },
  logoContainer: {
    alignItems: "center",
    marginTop: hp("5%")
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp("5%")
  },
  socialButton: {
    width: wp("40%"),
    height: hp("6%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp("2%"),
    marginHorizontal: wp("2%")
  },
  googleButton: {
    backgroundColor: "#E1422F"
  },
  facebookButton: {
    backgroundColor: "#2C65D8"
  },
  socialButtonText: {
    color: "white",
    fontSize: wp("3.5%"),
    marginLeft: wp("2%")
  },
  orText: {
    alignSelf: "center",
    marginVertical: hp("2%")
  },
  formContainer: {
    paddingHorizontal: wp("5%")
  },
  inputContainer: {
    marginBottom: hp("2%")
  },
  inputLabel: {
    fontWeight: "500",
    marginBottom: hp("1%")
  },
  input: {
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: wp("2%"),
    padding: wp("3%")
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%")
  },
  checkboxText: {
    marginLeft: wp("2%")
  },
  signUpButton: {
    backgroundColor: "#F96C05",
    alignItems: "center",
    padding: hp("1.5%"),
    borderRadius: wp("2%"),
    marginTop: hp("4%")
  },
  signUpButtonText: {
    color: "white",
    fontSize: wp("4%")
  }
});

export default SignUp;
