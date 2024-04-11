import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ButtonGroup = ({ currentStep, handleNext, handlePrevious }) => {
  return (
    <View style={styles.buttonContainer}>
      {currentStep > 1 && (
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <LinearGradient
            colors={["#ff8c00", "#ff6f00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      {currentStep < 5 && (
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <LinearGradient
            colors={["#ff8c00", "#ff6f00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 12,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonGroup;
