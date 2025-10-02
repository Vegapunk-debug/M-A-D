import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ username = "Rohit" }) => (
  <View style={styles.header}>
    <Image source={{ uri: "" }} style={styles.avatar} />
    <View style={styles.headerText}>
      <Text style={styles.welcomeText}>Welcome back, {username}!</Text>
      <Text style={styles.subText}>Ready to learn and teach today?</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", padding: 20, paddingTop: 40 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  headerText: { marginLeft: 12 },
  welcomeText: { fontSize: 18, fontWeight: "600" },
  subText: { color: "#6B7280" },
});

export default Header;
