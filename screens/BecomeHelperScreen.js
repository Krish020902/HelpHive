import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import * as ImagePicker from "expo-image-picker";
import Step1 from "../components/StepOne";
import Step2 from "../components/StepTwo";
import Step3 from "../components/StepThree";
import Step4 from "../components/StepFour";

const BecomeHelperScreen = ({ navigation }) => {
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
  const [selectedTasks, setSelectedTasks] = useState([]);

  const taskCategories = [
    {
      category: "Delivery Services",
      skills: [
        "Package Delivery",
        "Courier Services",
        "Moving and Delivery",
        "Food Delivery",
        "Grocery Delivery",
      ],
    },
    {
      category: "Grocery Shopping and Errands",
      skills: [
        "Grocery Shopping",
        "Costco Shopping",
        "Shopping and Errands",
        "Pharmacy Pickups",
        "Dry Cleaning Pickups",
      ],
    },
    {
      category: "Technology and Computer Services",
      skills: [
        "Software Development",
        "Website Design and Development",
        "Computer Repair and Setup",
        "Bug Fixes and Troubleshooting",
        "Data Entry and Processing",
        "IT Consulting",
      ],
    },
    {
      category: "Project and Task Help",
      skills: [
        "General Labor and Moving Help",
        "Home Improvement and Repair",
        "Furniture Assembly and Disassembly",
        "Yard Work and Landscaping",
        "Cleaning Services",
        "Painting and Drywall",
        "Junk Removal",
      ],
    },
    {
      category: "Artwork and Creative Services",
      skills: [
        "Graphic Design",
        "Illustration and Drawing",
        "Painting and Murals",
        "Photography and Videography",
        "Logo Design",
        "Calligraphy and Lettering",
        "Animation and Motion Graphics",
      ],
    },
    {
      category: "Miscellaneous Services",
      skills: [
        "Handyman Services",
        "Event Staffing and Assistance",
        "Personal Assistant Services",
        "Tutoring and Lessons",
        "Pet Care Services",
        "Carpentry and Woodworking",
        "Electrical Services",
        "Plumbing Services",
        "Appliance Repair",
        "Catering and Food Services",
        "Moving Assistance",
        "Packing and Unpacking",
      ],
    },
    {
      category: "Writing and Translation",
      skills: [
        "Article Writing",
        "Copywriting",
        "Proofreading and Editing",
        "Transcription",
        "Translation Services",
      ],
    },
    {
      category: "Health and Beauty",
      skills: [
        "Hairstyling and Barbering",
        "Makeup and Cosmetology",
        "Personal Training",
        "Massage Therapy",
        "Nail Services",
      ],
    },
  ];

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
          <ScrollView style={styles.tasksContainer}>
            <Text style={styles.taskHeading}>
              Please choose the tasks that you are prepared to undertake.
            </Text>
            {taskCategories.map((category, index) => (
              <View key={index} style={styles.categoryContainer}>
                <Text style={styles.categoryName}>{category.category}</Text>
                <ScrollView horizontal>
                  <FlatList
                    data={category.skills}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[
                          styles.taskButton,
                          selectedTasks.includes(item) && styles.selectedTask,
                        ]}
                        onPress={() => {
                          setSelectedTasks((prevTasks) =>
                            prevTasks.includes(item)
                              ? prevTasks.filter((task) => task !== item)
                              : [...prevTasks, item]
                          );
                        }}
                      >
                        <Text style={styles.taskButtonText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    numColumns={2}
                  />
                </ScrollView>
              </View>
            ))}
          </ScrollView>
        );
      case 4:
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
      case 5:
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
      <ProgressBar progress={currentStep / 5} width={null} color="#ff8c00" />
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
        {currentStep < 5 && (
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
    padding: 10,
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
  tasksContainer: {
    flex: 1,
    // padding: 20,
  },
  taskHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    // backgroundColor: "white",
    // height: 300,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  taskButton: {
    backgroundColor: "#555",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selectedTask: {
    backgroundColor: "#ff8c00",
  },
  taskButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default BecomeHelperScreen;
