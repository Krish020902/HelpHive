import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ForgotPasswordScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);

  const handleMobileNumberChange = (text) => {
    const cleanText = text.replace(/[^0-9]/g, "");
    setMobileNumber(cleanText);
    setIsValidNumber(cleanText.length === 10);
  };

  const handleGetOTP = () => {
    if (isValidNumber) {
      navigation.navigate("OTPScreen", { mobileNumber });
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <Text style={styles.appName}>HelpHive</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome,</Text>
        </View>
        <Text style={styles.subheading}>
          Enter your mobile number to recover password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor={"white"}
          value={mobileNumber}
          onChangeText={handleMobileNumberChange}
          keyboardType="phone-pad"
          maxLength={10}
        />
        <Text style={styles.otpMessage}>
          OTP message will be sent to your phone number
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            isValidNumber ? styles.validButton : styles.invalidButton,
          ]}
          onPress={handleGetOTP}
          disabled={!isValidNumber}
        >
          <Text
            style={isValidNumber ? styles.buttonText : styles.invalidbuttonText}
          >
            Get OTP
          </Text>
        </TouchableOpacity>
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
    marginTop: 30,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  logo: {
    width: 140,
    height: 140,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff8c00",
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  textContainer: {
    alignSelf: "flex-start", // Align the text to the left
    marginLeft: 35, // Adjust the margin as needed
  },
  welcomeText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 7,
  },
  subheading: {
    marginLeft: 20,
    fontSize: 16,
    color: "white",
    // textAlign: "center",
    marginBottom: 32,
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
  otpMessage: {
    color: "grey",
    marginBottom: 32,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    // alignSelf: "flex-end", // Align the button to the bottom
    marginBottom: 20, // Add margin bottom to separate from input field
  },
  validButton: {
    backgroundColor: "#ff8c00",
  },
  invalidButton: {
    borderWidth: 1,
    borderColor: "#ff8c00",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  invalidbuttonText: {
    color: "#ff8c00",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
