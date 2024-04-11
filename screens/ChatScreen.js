import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import Ionicons from "react-native-vector-icons/Ionicons";

const socket = io("http://192.168.211.178"); // Replace with your server URL

const ChatScreen = ({ route }) => {
  const { helpername } = route.params || { helpername: "Helper" };
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isUserMessage, setIsUserMessage] = useState(false);

  const handleMessageReceived = useCallback((data) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: data, isUserMessage: false },
    ]);
  }, []);

  useEffect(() => {
    socket.on("message", handleMessageReceived);
    return () => {
      socket.off("message", handleMessageReceived);
    };
  }, [handleMessageReceived]);

  const sendMessage = () => {
    console.log(message);
    if (message.trim()) {
      socket.emit("message", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUserMessage: true },
      ]);
      setMessage("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.isUserMessage
          ? styles.userMessageContainer
          : styles.otherMessageContainer,
      ]}
    >
      <Text
        style={[
          styles.message,
          item.isUserMessage ? styles.userMessage : styles.otherMessage,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.chatContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.helperName}>{helpername}</Text>
        </View>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageListContent}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={"white"}
            value={message}
            onChangeText={setMessage}
            multiline
            autoFocus
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" color="#ffffff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
  chatContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 15,
  },
  helperName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 16,
  },
  messageListContent: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  userMessageContainer: {
    backgroundColor: "#ffa500",
    alignSelf: "flex-end",
    marginLeft: 40,
  },
  otherMessageContainer: {
    backgroundColor: "#3e3e3e",
    alignSelf: "flex-start",
    marginRight: 40,
  },
  message: {
    fontSize: 16,
  },
  userMessage: {
    color: "#ffffff",
  },
  otherMessage: {
    color: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3e3e3e",
    padding: 10,
  },
  input: {
    color: "#ffffff",
    padding: 10,
    backgroundColor: "#4e4e4e",
    borderRadius: 20,
    marginRight: 10,
    width: "85%",
  },
  sendButton: {
    backgroundColor: "#ffa500",
    borderRadius: 20,
    padding: 10,
  },
});

export default ChatScreen;
