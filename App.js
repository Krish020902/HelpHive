// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { UserProvider } from "./context/UserContext";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TimeScreen from "./screens/TimeScreen";
import WhoWeAre from "./screens/WhoWeAre";
import TaskDetailScreen from "./screens/TaskDetailScreen";
import ChatScreen from "./screens/ChatScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
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

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BecomeHelper"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WhoWeAre"
            component={WhoWeAre}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetailScreen"
            component={TaskDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
