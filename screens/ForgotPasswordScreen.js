// ForgotPasswordScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import OTPInputView from "react-native-otp-form";

const ForgotPasswordScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const handleSendOTP = () => {
    // Implement logic to send OTP to the provided mobile number
    console.log("Sent OTP to:", mobileNumber);
    setShowOTPInput(true);
  };

  const handleLogin = () => {
    // Implement logic to validate OTP and reset the password
    console.log("Logging in with OTP:", otp);
    navigation.navigate("HomeTabs");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack} style={{ marginTop: 30 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={(value) => {
            setMobileNumber(value.slice(0, 10));
          }}
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          maxLength={10}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        {showOTPInput && (
          <View style={styles.otpContainer}>
            <OTPInputView
              pinCount={6}
              code={otp}
              keyboardType="number-pad"
              onCodeChanged={(code) => setOTP(code)}
              autoFocusOnLoad
              codeInputFieldStyle={styles.otpInputField}
              codeInputHighlightStyle={styles.otpInputFieldHighlight}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ff8c00",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#fff",
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    fontFamily: "sans-serif-medium",
  },
  otpContainer: {
    marginBottom: 20,
  },
  otpInputField: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#ff8c00",
    color: "#fff",
    fontSize: 24,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  otpInputFieldHighlight: {
    borderColor: "#ff8c00",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
