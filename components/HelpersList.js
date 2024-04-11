// HelpersList.js
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const HelpersList = ({ onPress }) => {
  const users = [
    {
      name: "MC Stan",
      rating: 8.5,
      profession: "Engineer",
      photo: require("../assets/user1.png"),
    },
    {
      name: "Jackie Chan",
      rating: 6.2,
      profession: "Designer",
      photo: require("../assets/user2.png"),
    },
    {
      name: "Lawrence Bishnoi",
      rating: 4.8,
      profession: "Developer",
      photo: require("../assets/user3.png"),
    },
    {
      name: "Ramesh Kumar",
      rating: 7.3,
      profession: "Manager",
      photo: require("../assets/user4.png"),
    },
    {
      name: "Mark Zuck",
      rating: 5.1,
      profession: "Analyst",
      photo: require("../assets/user5.png"),
    },
    {
      name: "Dipendar Goyal",
      rating: 3.9,
      profession: "Consultant",
      photo: require("../assets/user6.png"),
    },
    {
      name: "Ritesh Agarwal",
      rating: 6.7,
      profession: "Architect",
      photo: require("../assets/user7.png"),
    },
    // Add more users as needed
  ];
  const getRatingColor = (rating) => {
    if (rating >= 7) {
      return "green";
    } else if (rating >= 4 && rating < 7) {
      return "#ffa500"; // Orange (warning)
    } else {
      return "red"; // Danger
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Text style={styles.headerText}>Helper's list</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.userList}
        contentContainerStyle={styles.userListContent}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.userCard}>
              <Image source={item.photo} style={styles.userPhoto} />
              <Text style={styles.userName}>{item.name}</Text>
              <Text
                style={[
                  styles.userProfession,
                  { color: getRatingColor(item.rating) },
                ]}
              >
                {item.profession}
              </Text>
              <Text
                style={[
                  styles.userRating,
                  { color: getRatingColor(item.rating) },
                ]}
              >
                Rating: {item.rating}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        scrollEventThrottle={16}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
  },
  headerText: {
    left: 20,
    fontSize: 18,
    color: "#ffffff",
  },
  seeAllText: {
    right: -10,
    fontSize: 16,
    color: "#ffa500", // You can adjust the color as needed
  },
  userList: {
    marginTop: 20,
    height: 200,
  },
  userListContent: {
    paddingHorizontal: 10,
  },
  userCard: {
    backgroundColor: "#3e3e3e",
    borderColor: "#503d3f",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
    width: 120,
    height: 170, // Adjust the height of each card
    marginBottom: 10, // Add margin to separate cards
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: "#ffffff",
    marginTop: 5,
    textAlign: "center",
  },
  userProfession: {
    fontSize: 12,
    textAlign: "center",
  },
  userRating: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HelpersList;
