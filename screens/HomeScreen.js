// HomeScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import HelpersList from "../components/HelpersList";
import ToolsGrid from "../components/ToolsGrid";
import useScrollPosition from "../hooks/useScrollPosition";

const HomeScreen = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isButtonOrange, setIsButtonOrange] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [buttonAnimation] = useState(new Animated.Value(1));
  const [pulseAnimation] = useState(new Animated.Value(0));
  const [isPulsing, setIsPulsing] = useState(false);
  const navigation = useNavigation();
  const { scrollY } = useScrollPosition();

  const slots = [
    { label: "Short Term", value: "short" },
    { label: "Medium Term", value: "medium" },
    { label: "Long Term", value: "long" },
  ];

  const handleButtonPress = () => {
    setIsButtonOrange(!isButtonOrange);
    startButtonAnimation();
    setIsPulsing(!isPulsing);
  };

  const handleSlotSelection = (value) => {
    setSelectedSlot(value);
    setIsModalVisible(false);
  };

  const startButtonAnimation = () => {
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 1.2,
        duration: 200,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 200,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    let interval;

    if (isPulsing) {
      interval = setInterval(() => {
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 500,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 0,
            duration: 500,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]).start();
      }, 800);
    }

    return () => clearInterval(interval);
  }, [isPulsing, pulseAnimation]);

  const navigateToDifferentPage = () => {
    // Logic to navigate to a different page
  };

  const navigateToChatScreen = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stickyContainer,
          {
            backgroundColor: scrollY > 0 ? "#1e1e1e" : "#2e2e2e",
          },
        ]}
      >
        <SearchBar />
      </View>

      <ScrollView style={styles.contentContainer}>
        <HelpersList onPress={navigateToDifferentPage} />
        <ToolsGrid />
      </ScrollView>

      <View style={styles.chatButtonContainer}>
        <TouchableOpacity
          style={[styles.chatButton, styles.chatButtonShadow]}
          onPress={navigateToChatScreen}
        >
          <Ionicons name="chatbox" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
  stickyContainer: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingVertical: 10, // Add some padding to the SearchBar
  },
  contentContainer: {
    marginTop: 145, // Adjust this value to leave space for the SearchBar
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
  chatButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  chatButton: {
    backgroundColor: "#ffa500",
    padding: 10,
    borderRadius: 25,
  },
  chatButtonShadow: {
    shadowColor: "#ffa500",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
