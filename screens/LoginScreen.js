// LoginScreen.js
import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

import { useUserContext } from "../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const { setUserPassword, password, setUserPhone, phone } = useUserContext();
  const logoAnimationValue = useSharedValue(0);
  const handleLogin = (navigation) => {
    // Perform login validation here
    // If successful, navigate to the next screen
    // setUserPhone(phone);
    // setUserPassword(password);
    console.log(phone, "-", password);
    navigation.navigate("HomeTabs");
  };
  const handleForgotPassword = (navigation) => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const handleSignUp = (navigation) => {
    // Navigate to the sign up screen
    navigation.navigate("Signup");
  };

  const handleLoginAsHelper = (navigation) => {
    // Navigate to the helper homepage
    navigation.navigate("HelperScreen");
  };

  const startLogoAnimation = () => {
    logoAnimationValue.value = withTiming(1, { duration: 1000 });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.appName} onLayout={startLogoAnimation}>
        HelpHive
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        onChangeText={(number) => setUserPhone(number)}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(pass) => setUserPassword(pass)}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        onPress={() => handleForgotPassword(navigation)}
        accessibilityLabel="Forgot Password"
      >
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(navigation)}
        accessibilityLabel="Login button"
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.helperButton]}
        onPress={() => handleLoginAsHelper(navigation)}
        accessibilityLabel="Login as Helper button"
      >
        <Text style={styles.helperbuttonText}>Login as Helper</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.newUserText}>New user?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSignUp(navigation)}
        accessibilityLabel="Sign Up button"
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
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
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff8c00",
    marginBottom: 40,
    fontFamily: "Roboto",
  },
  forgotPassword: {
    color: "#aaa",
    marginBottom: 20,
    marginRight: 180,
    fontFamily: "sans-serif-medium",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#aaa",
  },
  orText: {
    color: "#aaa",
    marginHorizontal: 10,
    fontFamily: "sans-serif-medium",
  },
  newUserText: {
    color: "#aaa",
    marginBottom: 10,
    fontFamily: "sans-serif-medium",
  },
  button: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  helperbutton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  helperButton: {
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#ff8c00",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  helperbuttonText: {
    color: "#ff8c00",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default LoginScreen;
