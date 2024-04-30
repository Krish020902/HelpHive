// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import OTPScreen from "./screens/OTPScreen";
import HomeTabs from "./screens/HomeTabs";
import HelperScreen from "./screens/HelperScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import BookedTaskDetailScreen from "./screens/BookedTaskDetailScreen";
import StatusTaskDetailScreen from "./screens/StatusTaskDetailScreen";
import BecomeHelperScreen from "./screens/BecomeHelperScreen";
const Stack = createNativeStackNavigator();

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
          <Stack.Screen
            name="OTPScreen"
            component={OTPScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HelperScreen"
            component={HelperScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookedTaskDetailScreen"
            component={BookedTaskDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StatusTaskDetailScreen"
            component={StatusTaskDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BecomeHelperScreen"
            component={BecomeHelperScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
