import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import * as ImagePicker from "expo-image-picker";
import Step1 from "../components/StepOne";
import Step2 from "../components/StepTwo";
import Step3 from "../components/StepThree";
import Step4 from "../components/StepFour";

const SignUpScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [adharCard, setAdharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      switch (type) {
        case "adharCard":
          setAdharCard(result.assets[0].uri);
          break;
        case "panCard":
          setPanCard(result.assets[0].uri);
          break;
        case "photo":
          setPhoto(result.assets[0].uri);
          break;
        case "signature":
          setSignature(result.assets[0].uri);
          break;
        default:
          break;
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={setEmail}
          />
        );
      case 2:
        return (
          <Step2
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            pincode={pincode}
            setPincode={setPincode}
          />
        );
      case 3:
        return (
          <Step3
            adharCard={adharCard}
            setAdharCard={setAdharCard}
            panCard={panCard}
            setPanCard={setPanCard}
            photo={photo}
            setPhoto={setPhoto}
            signature={signature}
            setSignature={setSignature}
            pickImage={pickImage}
          />
        );
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Back icon */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={{ marginTop: 80 }}></View>
      <ProgressBar progress={currentStep / 4} width={null} color="#ff8c00" />
      <View style={styles.contentContainer}>{renderStep()}</View>
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity
            style={[styles.button, styles.buttonPrevious]}
            onPress={handlePrevious}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentStep < 4 && (
          <TouchableOpacity
            style={[styles.button, styles.buttonNext]}
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonPrevious: {
    backgroundColor: "#555",
  },
  buttonNext: {
    backgroundColor: "#ff8c00",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    position: "absolute",

    top: 50,
    left: 20,
    zIndex: 10,
  },
});

export default SignUpScreen;
