// src/components/Step3.js
import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Step3 = ({
  adharCard,
  setAdharCard,
  panCard,
  setPanCard,
  photo,
  setPhoto,
  signature,
  setSignature,
  pickImage,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Adhar Card</Text>
        <View style={styles.uploadContent}>
          <View style={styles.imageContainer}>
            {adharCard ? (
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: adharCard }}
                  style={styles.uploadedImage}
                />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setAdharCard(null)}
                >
                  <FontAwesome name="trash-o" size={24} color="#df4759" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => pickImage("adharCard")}
              >
                <MaterialIcons name="file-upload" size={18} color="white" />
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Pan Card</Text>
        <View style={styles.uploadContent}>
          <View style={styles.imageContainer}>
            {panCard ? (
              <View style={styles.imageWrapper}>
                <Image source={{ uri: panCard }} style={styles.uploadedImage} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setPanCard(null)}
                >
                  <FontAwesome name="trash-o" size={24} color="#df4759" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => pickImage("panCard")}
              >
                <MaterialIcons name="file-upload" size={18} color="white" />
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Photo</Text>
        <View style={styles.uploadContent}>
          <View style={styles.imageContainer}>
            {photo ? (
              <View style={styles.imageWrapper}>
                <Image source={{ uri: photo }} style={styles.uploadedImage} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setPhoto(null)}
                >
                  <FontAwesome name="trash-o" size={24} color="#df4759" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => pickImage("photo")}
              >
                <MaterialIcons name="file-upload" size={18} color="white" />
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Signature</Text>
        <View style={styles.uploadContent}>
          <View style={styles.imageContainer}>
            {signature ? (
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: signature }}
                  style={styles.uploadedImage}
                />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setSignature(null)}
                >
                  <FontAwesome name="trash-o" size={24} color="#df4759" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => pickImage("signature")}
              >
                <MaterialIcons name="file-upload" size={18} color="white" />
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 25,
    flexGrow: 1,
  },
  uploadContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  uploadText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  uploadContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 8,
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 5,
  },
  uploadButton: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#ff8c00",
    borderRadius: 8,
  },
  uploadButtonText: {
    marginLeft: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 20,
  },
});

export default Step3;
