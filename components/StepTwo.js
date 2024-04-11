// src/components/Step2.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Step2 = ({ address, setAddress, city, setCity, pincode, setPincode }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pincode</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your pincode"
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
          placeholderTextColor="#ccc"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ff8c00",
    borderWidth: 2,
    paddingHorizontal: 15,
    color: "white",
    backgroundColor: "#333",
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "sans-serif-medium",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Step2;
