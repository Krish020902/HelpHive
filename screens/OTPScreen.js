import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Timer from "../components/Timer";

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOTP] = useState("");
  const { mobileNumber } = route.params;

  const handleLogin = () => {
    // Perform OTP verification logic here
    // If the OTP is valid, navigate to the HomeScreen
    navigation.navigate("HomeTabs");
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
      <Image
        source={require("../assets/garfieldotp.jpg")}
        style={{ height: 150, width: 150, alignSelf: "center" }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.subheading}>
          Enter verification code sent to your registered number
        </Text>
        <OTPInputView
          style={{ height: 60 }}
          pinCount={6}
          code={otp}
          onCodeChanged={setOTP}
          autoFocusOnLoad
          codeInputFieldStyle={styles.otpInput}
          codeInputHighlightStyle={styles.otpInputHighlight}
          keyboardAppearance="dark"
        />
        <View style={styles.resend}>
          <Text style={styles.resendOTPText}>Resend OTP in: </Text>
          <Timer />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  headerContainer: {
    marginTop: 45,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    height: 100,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff8c00",
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    marginTop: 15,

    // justifyContent: "center",
    alignItems: "center",
  },
  subheading: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginBottom: 13,
    // padding: 1,
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
  resendOTPText: {
    color: "#fff",
    marginTop: 16,

    justifyContent: "flex-start",
  },
  resend: {
    flexDirection: "row",
  },
  button: {
    position: "absolute",
    bottom: 32,
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OTPScreen;
