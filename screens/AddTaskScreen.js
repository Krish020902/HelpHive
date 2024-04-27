import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-notifications";

const AddTaskScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isHourlyBased, setIsHourlyBased] = useState(false);
  const [hourlyPrice, setHourlyPrice] = useState("");
  const [taskPrice, setTaskPrice] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const toastRef = useRef(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggleTaskMethod = () => {
    setIsHourlyBased(!isHourlyBased);
    setHourlyPrice("");
    setTaskPrice("");
  };

  const handleSubmit = () => {
    if (taskName.trim() === "") {
      toastRef.current.show("Please enter a task name", {
        type: "danger",
        placement: "bottom",
        animationType: "slide-in",
      });
      return;
    }

    if (taskDescription.trim() === "") {
      toastRef.current.show("Please enter a task description", {
        type: "danger",
        placement: "bottom",

        animationType: "slide-in",
      });
      return;
    }

    if (isHourlyBased && hourlyPrice.trim() === "") {
      toastRef.current.show("Please enter an hourly price", {
        type: "danger",
        placement: "bottom",
        animationType: "slide-in",
      });
      return;
    }

    if (!isHourlyBased && taskPrice.trim() === "") {
      toastRef.current.show("Please enter a task price", {
        type: "danger",
        placement: "bottom",
        animationType: "slide-in",
      });
      return;
    }

    if (!agreePrivacy) {
      toastRef.current.show("Please agree to the privacy policy", {
        type: "danger",
        placement: "bottom",
        animationType: "slide-in",
      });
      return;
    }

    // Handle task submission logic here
    console.log("Task submitted:", {
      taskName,
      taskDescription,
      isHourlyBased,
      hourlyPrice,
      taskPrice,
      agreePrivacy,
    });

    toastRef.current.show("Task submitted successfully", {
      type: "success",
      placement: "bottom",

      animationType: "slide-in",
    });
  };

  return (
    <View style={styles.container}>
      <Toast ref={toastRef} duration={1500} style={{ borderColor: "white" }} />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Task</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.labelText}>Task Name</Text>
        <TextInput
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
          placeholderTextColor={"grey"}
          placeholder="Enter task name"
        />
        <Text style={styles.labelText}>Task Description</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={taskDescription}
          onChangeText={setTaskDescription}
          multiline
          placeholder="Enter task description"
          placeholderTextColor={"grey"}
        />
        <Text style={styles.labelText}>Task Method</Text>
        <TouchableOpacity
          style={styles.taskMethodToggle}
          onPress={handleToggleTaskMethod}
        >
          <Text
            style={[
              styles.taskMethodText,
              isHourlyBased && styles.activeMethodText,
            ]}
          >
            Hourly Based
          </Text>
          <Text
            style={[
              styles.taskMethodText,
              !isHourlyBased && styles.activeMethodText,
            ]}
          >
            Task Based
          </Text>
        </TouchableOpacity>
        {isHourlyBased && (
          <View>
            <Text style={styles.labelText}>Hourly Price</Text>
            <TextInput
              style={styles.input}
              value={hourlyPrice}
              onChangeText={setHourlyPrice}
              placeholder="Enter hourly price"
              keyboardType="numeric"
              placeholderTextColor={"grey"}
            />
          </View>
        )}
        {!isHourlyBased && (
          <View>
            <Text style={styles.labelText}>Task Price</Text>
            <TextInput
              style={styles.input}
              value={taskPrice}
              onChangeText={setTaskPrice}
              placeholder="Enter task price"
              keyboardType="numeric"
              placeholderTextColor={"grey"}
            />
          </View>
        )}
        <View style={styles.privacyContainer}>
          <Switch
            value={agreePrivacy}
            trackColor={{ true: "orange", false: "grey" }}
            thumbColor={"#FF8C00"}
            onValueChange={setAgreePrivacy}
            style={styles.switch}
          />
          <Text style={styles.privacyText}>Agree to all privacy policy</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 16,
  },
  formContainer: {
    flex: 1,
  },
  labelText: {
    fontSize: 14,
    color: "#CCCCCC",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    padding: 12,
    color: "#FFFFFF",
    marginBottom: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  taskMethodToggle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2A2A2A",
    borderRadius: 8,

    marginBottom: 16,
  },
  taskMethodText: {
    // backgroundColor: "white",
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 30,

    fontSize: 16,
    color: "#CCCCCC",
  },
  activeMethodText: {
    backgroundColor: "#FF8C00",
    // padding: 12,
    color: "white",
    fontWeight: "bold",
  },
  privacyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  switch: {
    marginRight: 8,
  },
  privacyText: {
    color: "#CCCCCC",
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default AddTaskScreen;
