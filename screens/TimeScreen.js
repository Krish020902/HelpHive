import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabView,
} from "@react-navigation/material-top-tabs";
import ShortTermComponent from "./ShortTermComponent";
import MediumTermComponent from "./MediumTermComponent";
import LongTermComponent from "./LongTermComponent";

const TimeScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ff8c00",
          tabBarInactiveTintColor: "#ffffff",
          tabBarStyle: {
            backgroundColor: "#333333",
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#ff8c00",
          },
        }}
      >
        <Tab.Screen
          name="Short Term"
          component={ShortTermComponent}
          options={{
            tabBarComponent: MaterialTopTabView,
          }}
        />
        <Tab.Screen
          name="Medium Term"
          component={MediumTermComponent}
          options={{
            tabBarComponent: MaterialTopTabView,
          }}
        />
        <Tab.Screen
          name="Long Term"
          component={LongTermComponent}
          options={{
            tabBarComponent: MaterialTopTabView,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: 35,
  },
});

export default TimeScreen;
