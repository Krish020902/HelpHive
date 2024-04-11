// ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleBecomeHelper = () => {
    navigation.navigate("BecomeHelper");
  };
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const handleWhoWeAre = () => {
    navigation.navigate("WhoWeAre");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/krish.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Krish Mehta</Text>
          <Text style={styles.phoneNumber}>+91-8401265994</Text>
          <Text style={styles.email}>krish.mehta.3822@gmail.com</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="call-outline" size={24} color="#ffffff" />
          <Text style={styles.listItemText}>Customer Care</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="location-outline" size={24} color="#ffffff" />
          <Text style={styles.listItemText}>Address</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="document-text-outline" size={24} color="#ffffff" />
          <Text style={styles.listItemText}>Terms and Conditions</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={handleWhoWeAre}>
          <Ionicons name="people-outline" size={24} color="#ffffff" />
          <Text style={styles.listItemText}>Who We Are</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#ffffff" />
          <Text style={styles.listItemText}>Logout</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.becomeHelperButton}
        onPress={handleBecomeHelper}
      >
        <Text style={styles.becomeHelperButtonText}>Become helper</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    padding: 16,
  },
  profileContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  phoneNumber: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 4,
  },
  email: {
    color: "#ffffff",
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#3C3C3C",
  },
  listItemText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  becomeHelperButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  becomeHelperButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
