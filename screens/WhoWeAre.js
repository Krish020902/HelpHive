import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const WhoWeAre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require("./logo.png")} style={styles.logo} /> */}
        <Text style={styles.title}>Who We Are</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          HelpHive: Connecting Those in Need with Helping Hands
        </Text>
        <Text style={styles.paragraph}>
          HelpHive was founded in 2024 by Krish Mehta, with the mission of
          bringing people together to help one another in various aspects of
          life. We believe that by leveraging the power of community, we can
          create a more interconnected and supportive society.
        </Text>
        <Text style={styles.paragraph}>
          Our platform connects those who need assistance with individuals who
          are willing and able to provide help. Whether it's transportation,
          grocery shopping, home maintenance, or any other everyday task,
          HelpHive aims to be the bridge that brings these two groups together.
        </Text>
        <Text style={styles.paragraph}>
          At the heart of our company's philosophy is the belief that by helping
          others, we can create a better world for everyone. We strive to foster
          a sense of community and camaraderie, where people can come together
          to support one another and make a positive impact on their local
          neighborhoods and beyond.
        </Text>
        <Text style={styles.paragraph}>
          As we continue to grow and evolve, we remain committed to our core
          values of empathy, innovation, and social responsibility. We are
          excited to be a part of the 2024 landscape and to play a role in
          shaping a future where everyone has the support they need to thrive.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    tintColor: "#ff6b00",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6b00",
  },
  content: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff6b00",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
});

export default WhoWeAre;
