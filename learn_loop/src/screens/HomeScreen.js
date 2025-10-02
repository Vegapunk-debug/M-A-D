import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";
import { data } from "../data/RandomData";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <View style={styles.charactersWrapper}>
          {data.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingBottom: 100 },
  charactersWrapper: { paddingHorizontal: 20, marginTop: 20 },
});
