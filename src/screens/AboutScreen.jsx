import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AboutScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>About Learn Loop</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.description, { color: theme.text }]}>
                    Learn Loop is a community-driven platform designed to connect people who want to teach with those who want to learn.
                </Text>

                <Text style={[styles.sectionTitle, { color: theme.text }]}>Our Mission</Text>
                <Text style={[styles.text, { color: theme.textLight }]}>
                    We believe that everyone has something to teach and something to learn. Our mission is to democratize education by creating a peer-to-peer network where skills are exchanged freely and connections are made based on shared interests.
                </Text>

                <Text style={[styles.sectionTitle, { color: theme.text }]}>How It Works</Text>
                <Text style={[styles.text, { color: theme.textLight }]}>
                    1. <Text style={[styles.bold, { color: theme.primary }]}>Create a Profile:</Text> Showcase your skills and interests.{'\n'}
                    2. <Text style={[styles.bold, { color: theme.primary }]}>Post a Skill:</Text> Share what you can teach or what you want to learn.{'\n'}
                    3. <Text style={[styles.bold, { color: theme.primary }]}>Connect:</Text> Find others who match your learning or teaching goals and start a conversation.
                </Text>

                <Text style={[styles.sectionTitle, { color: theme.text }]}>Contact Us</Text>
                <Text style={[styles.text, { color: theme.textLight }]}>
                    Have questions or feedback? Reach out to us at support@learnloop.com.
                </Text>

                <View style={styles.footer}>
                    <Text style={[styles.footerText, { color: theme.textLight }]}>© 2025 Learn Loop. All rights reserved.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
    },
});
