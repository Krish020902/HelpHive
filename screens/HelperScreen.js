import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import TimeScreen from "./TimeScreen";
import ProfileScreen from "./ProfileScreen";
const Tab = createBottomTabNavigator();
const HelperScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#2e2e2e" },
        tabBarInactiveTintColor: "#ffffff",
        tabBarActiveTintColor: "#ff8c00",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={TimeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clock-o" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HelperScreen;
