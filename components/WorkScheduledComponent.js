import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WorkScheduledComponent = ({ navigation }) => {
  const dummyData = [
    { id: 1, title: "Task 1", status: "Accepted" },
    { id: 2, title: "Task 2", status: "Accepted" },
    { id: 3, title: "Task 3", status: "Pending" },
    // Add more data as needed
  ];

  const handleItemPress = (item) => {
    console.log(item); // Check if item is logged correctly
    navigation.navigate("StatusTaskDetailScreen", {
      taskName: item.title,
      status: item.status,
    });
  };

  return (
    <View style={styles.container}>
      {dummyData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemContainer}
          onPress={() => handleItemPress(item)}
        >
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
          <View style={styles.statusBox}>
            <Text
              style={{
                paddingHorizontal: 8,

                color: item.status === "Accepted" ? "#339900" : "#ffcc00",
              }}
            >
              {item.status}
            </Text>
          </View>
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
    padding: 8,
    paddingLeft: 12,
    backgroundColor: "#444444",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 16,
  },
  statusBox: {
    width: 90,
    height: 35,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222",
  },
});

export default WorkScheduledComponent;
