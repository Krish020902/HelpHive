import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabView,
} from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import WorkCompletedComponent from "../components/WorkCompletedComponent";
import WorkScheduledComponent from "../components/WorkScheduledComponent";

const TasksScreen = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  const navigateToAddTask = () => {
    navigation.navigate("AddTaskScreen");
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ff8c00",
          tabBarInactiveTintColor: "#ffffff",
          tabBarStyle: { backgroundColor: "#333333" },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIndicatorStyle: { backgroundColor: "#ff8c00" },
        }}
      >
        <Tab.Screen
          name="Work Scheduled"
          component={WorkScheduledComponent}
          options={{ tabBarComponent: MaterialTopTabView }}
        />
        <Tab.Screen
          name="Work Completed"
          component={WorkCompletedComponent}
          options={{ tabBarComponent: MaterialTopTabView }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.addButton} onPress={navigateToAddTask}>
        <Icon name="plus" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: 35,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#ff8c00",
    padding: 13,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
});

export default TasksScreen;
