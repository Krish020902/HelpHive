import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useUserContext } from "../context/UserContext";
const RoundButton = ({ onPress, color, started }) => {
  const buttonText = started ? "Started" : "Start";

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RoundButton;
