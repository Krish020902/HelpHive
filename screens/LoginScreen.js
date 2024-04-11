// LoginScreen.js
import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
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

  const handleSignUp = (navigation) => {
    // Navigate to the sign up screen
    navigation.navigate("Signup");
  };

  const startLogoAnimation = () => {
    logoAnimationValue.value = withTiming(1, { duration: 1000 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName} onLayout={startLogoAnimation}>
        HelpHive
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        // value={state.mobile}
        onChangeText={(number) => setUserPhone(number)}
        // onChangeText={(text) => dispatch({ type: "SET_MOBILE", payload: text })}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        // value={state.password}
        onChangeText={(pass) => setUserPassword(pass)}
        // onChangeText={(text) =>
        //   dispatch({ type: "SET_PASSWORD", payload: text })
        // }
        placeholderTextColor="#aaa"
      />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(navigation)}
        accessibilityLabel="Login button"
      >
        <Text style={styles.buttonText}>Login</Text>
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default LoginScreen;
