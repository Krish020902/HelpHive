// WorkCompletedComponent.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WorkCompletedComponent = ({ navigation }) => {
  const dummyData = [
    { id: 1, title: "Completed Task 1" },
    { id: 2, title: "Completed Task 2" },
    { id: 3, title: "Completed Task 3" },
    // Add more data as needed
  ];
  const handleItemPress = (item) => {
    console.log(item);
    navigation.navigate("BookedTaskDetailScreen", { taskName: item.title });
  };

  return (
    <View style={styles.container}>
      {dummyData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemContainer}
          onPress={() => handleItemPress(item)}
        >
          <Text style={styles.itemText}>{item.title}</Text>
          <Icon name="chevron-right" size={16} color="#ff8c00" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#444444",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default WorkCompletedComponent;
