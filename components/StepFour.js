// src/components/Step4.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Step4 = () => {
  return (
    <View>
      <Text style={styles.paymentText}>Payment: ₹300</Text>
      {/* Add payment integration here */}
    </View>
  );
};

const styles = StyleSheet.create({
  paymentText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Step4;
