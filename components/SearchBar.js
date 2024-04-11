import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Icon } from "@rneui/base";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("");
  const placeholders = [
    "Search developers",
    "Search helpers",
    "Search drivers",
    "Search mounters",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
      let currentIndex = placeholderText.length;
      const deleteInterval = setInterval(() => {
        if (currentIndex > 0) {
          setPlaceholderText((prevText) => prevText.slice(0, -1));
          currentIndex--;
        } else {
          clearInterval(deleteInterval);
          const newPlaceholder = placeholders[placeholderIndex];
          let charIndex = 0;
          const typewriterInterval = setInterval(() => {
            if (charIndex < newPlaceholder.length) {
              setPlaceholderText(
                (prevText) => prevText + newPlaceholder[charIndex]
              );
              charIndex++;
            } else {
              clearInterval(typewriterInterval);
            }
          }, 100);
        }
      }, 100);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [placeholderIndex, placeholders.length, placeholderText]);

  const handleSearch = () => {
    // Perform search based on searchText
    console.log("Searching for:", searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder={placeholderText}
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 30,

    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontFamily: "sans-serif-medium",
    borderColor: "#ffa500",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default SearchBar;
