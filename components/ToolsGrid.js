// ToolsGrid.js
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const ToolsGrid = () => {
  const toolIcons = [
    {
      icon: <Ionicons name="construct" size={30} color="white" />,
      label: "Tools",
    },
    {
      icon: <MaterialCommunityIcons name="brush" size={30} color="white" />,
      label: "Art",
    },
    { icon: <Feather name="code" size={30} color="white" />, label: "Code" },
    {
      icon: <FontAwesome5 name="book-open" size={30} color="white" />,
      label: "Education",
    },
    {
      icon: <Ionicons name="fitness" size={30} color="white" />,
      label: "Fitness",
    },
    {
      icon: <Ionicons name="game-controller" size={30} color="white" />,
      label: "Games",
    },
    {
      icon: <Ionicons name="medical" size={30} color="white" />,
      label: "Health",
    },
    {
      icon: <Ionicons name="musical-notes" size={30} color="white" />,
      label: "Music",
    },
    {
      icon: <Ionicons name="logo-pinterest" size={30} color="white" />,
      label: "Social",
    },
    { icon: <Ionicons name="film" size={30} color="white" />, label: "Video" },
  ];

  return (
    <View>
      <Text style={styles.headerText}>Need help with?</Text>
      <View style={styles.toolsGrid}>
        {toolIcons.map((tool, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.toolItem,
              index % 2 === 0 ? styles.toolItemLeft : styles.toolItemRight,
            ]}
          >
            {tool.icon}
            <Text style={styles.toolLabel}>{tool.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toolsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  headerText: {
    left: 20,
    fontSize: 18,
    color: "#ffffff",
  },
  toolItem: {
    width: "45%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#3e3e3e",
    borderColor: "orange",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  toolItemLeft: {
    marginRight: 10,
  },
  toolItemRight: {
    marginLeft: 10,
  },
  toolLabel: {
    color: "#ffffff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default ToolsGrid;
