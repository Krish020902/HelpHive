// src/components/Step1.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Step1 = ({
  name,
  setName,
  surname,
  setSurname,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
}) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your surname"
          value={surname}
          onChangeText={setSurname}
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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

export default Step1;
