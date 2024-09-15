import React, { useEffect, useState } from "react";
import { View, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Camera = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!image) {
      openCamera(); // Only open the camera if no image is present
    }
  }, [image]);

  const openCamera = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access camera is required!");
      navigation.goBack(); // Navigate back if permission is denied
      return;
    }

    // Open the camera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.uri);
    } else {
      navigation.goBack(); // Navigate back if camera is cancelled
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.preview} />
      ) : (
        <View style={styles.placeholder}>
          {/* Show some placeholder text or image */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  preview: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    backgroundColor: "#f0f0f0",
    borderRadius: 10
  }
});

export default Camera;
