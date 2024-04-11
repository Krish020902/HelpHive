import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LongTermComponent = ({ navigation }) => {
  const workList = [
    "Make MERN stack website",
    "Python developer intern needed",
    "Teacher needed",
  ];

  const handleItemPress = (item) => {
    // Handle item press here
    navigation.navigate("TaskDetailScreen", { taskName: item });
    console.log(`Pressed item: ${item}`);
  };

  return (
    <View style={styles.container}>
      {workList.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.listItem}
          onPress={() => handleItemPress(item)}
          activeOpacity={0.7}
        >
          <Ionicons name="time-outline" size={20} color="#7F7F7F" />
          <Text style={styles.timeText}>3-4 month</Text>
          <Text style={styles.workText} numberOfLines={1} ellipsizeMode="tail">
            {item}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#7F7F7F" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  timeText: {
    color: "#FF3333",
    marginLeft: 8,
    marginRight: 16,
    fontWeight: "bold",
  },
  workText: {
    flex: 1,
    marginRight: 8,
    color: "#FFFFFF",
  },
});

export default LongTermComponent;
