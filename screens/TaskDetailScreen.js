import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "./ChatScreen.js";

const TaskDetailScreen = ({ route, navigation }) => {
  const { taskName } = route.params;
  const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false);

  // Dummy user information
  const userInfo = {
    name: "Dhruv Rathee",
    email: "dhruvrathee@example.com",
    phone: "123-456-7890",
    aadharNumber: "123456789012",
  };

  // Dummy task details
  const taskDetails = {
    title: "Respond to urgent emails",
    description: "Review and respond to all urgent emails in the inbox.",
    charges: "₹500",
  };

  const handlePhotoPress = () => {
    setIsPhotoModalVisible(true);
  };

  const handleChat = (item) => {
    // <ChatComponent />;
    navigation.navigate("ChatScreen", { helpername: item });
  };

  const handlePhotoModalClose = () => {
    setIsPhotoModalVisible(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Helper Details</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <TouchableOpacity onPress={handlePhotoPress}>
          <Image source={require("../assets/user3.png")} style={styles.photo} />
        </TouchableOpacity>
        <View style={styles.userDetailsContainer}>
          <Text style={styles.labelText}>Name:</Text>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.labelText}>Email:</Text>
          <Text style={styles.userDetails}>{userInfo.email}</Text>
        </View>
        <View>
          <Text style={styles.labelText}>Phone:</Text>
          <Text style={styles.userDetails}>{userInfo.phone}</Text>
          <Text style={styles.labelText}>Aadhar:</Text>
          <Text style={styles.userDetails}>{userInfo.aadharNumber}</Text>
        </View>
      </View>
      <View style={styles.taskDetailsContainer}>
        <Text style={styles.labelText}>Task Name:</Text>
        <Text style={styles.taskTitle}>{taskName}</Text>
        <Text style={styles.labelText}>Task Description:</Text>
        <Text style={styles.taskDescription}>{taskDetails.description}</Text>
        <Text style={styles.labelText}>Task Charges:</Text>
        <Text style={styles.taskCharges}>{taskDetails.charges}</Text>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => handleChat("Dhruv")}
        >
          <Text style={styles.bookButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isPhotoModalVisible}
        transparent={true}
        onRequestClose={handlePhotoModalClose}
      >
        <View style={styles.photoModal}>
          <Image
            source={require("../assets/user3.png")}
            style={styles.enlargedPhoto}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handlePhotoModalClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 16,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  photoModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  enlargedPhoto: {
    width: "80%",
    height: "50%",
    borderRadius: 8,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userDetailsContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userDetails: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  labelText: {
    fontSize: 14,
    color: "#CCCCCC",
    marginTop: 8,
  },
  taskDetailsContainer: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    padding: 16,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 16,
  },
  taskCharges: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 16,
  },
  bookButton: {
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  chatButton: {
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 15,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
export default TaskDetailScreen;
