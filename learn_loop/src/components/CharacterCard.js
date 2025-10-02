import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CharacterCard = ({ name, skills, wantsToLearn }) => (
  <View style = {styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.subtitle}>Skills:</Text>
    <Text>{skills.join(", ")}</Text>
    <Text style={styles.subtitle} >Wants to Learn:</Text>
    <Text>{wantsToLearn.join(", ")}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  name: { fontWeight: "700", fontSize: 16, marginBottom: 8 },
  subtitle: { fontWeight: "600", marginTop: 8 },
});

export default CharacterCard;
