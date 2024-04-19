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
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const ForgotPasswordScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    try {
      // setIsLoading(true);
      // Implement logic to send OTP to the provided mobile number
      console.log("Sent OTP to:", mobileNumber);
      // setOTP("123456"); // Replace with the actual OTP
      setShowOTPInput(true);
      // Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Please try again.");
    } finally {
      // setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      // setIsLoading(true);
      // Implement logic to validate OTP and reset the password
      console.log("Logging in with OTP:", otp);
      // If OTP is valid, navigate to HomeTabs
      navigation.navigate("HomeTabs");
    } catch (error) {
      Alert.alert("Error", "Invalid OTP. Please try again.");
    } finally {
      // setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              setMobileNumber(value.replace(/[^0-9]/g, "").slice(0, 10)); // Remove non-numeric characters and limit to 10 digits
            }}
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            maxLength={10}
            // editable={!isLoading}
          />
          <TouchableOpacity
            style={[styles.button && styles.disabledButton]}
            onPress={handleSendOTP}
            // disabled={isLoading}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
          {showOTPInput && (
            <View style={styles.otpContainer}>
              <OTPInputView
                pinCount={6}
                code={otp}
                onCodeChanged={setOTP}
                autoFocusOnLoad
                codeInputFieldStyle={styles.otpInput}
                codeInputHighlightStyle={styles.otpInputHighlight}
                // editable={!isLoading}
                keyboardAppearance="dark"
              />
              <TouchableOpacity
                style={[styles.button && styles.disabledButton]}
                onPress={handleLogin}
                // disabled={isLoading}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#aaa",
    color: "#fff",
    fontSize: 24,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  otpInputHighlight: {
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
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
