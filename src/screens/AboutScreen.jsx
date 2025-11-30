import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colorPallete/colors';

export default function AboutScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>About Learn Loop</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.description}>
                    Learn Loop is a community-driven platform designed to connect people who want to teach with those who want to learn.
                </Text>

                <Text style={styles.sectionTitle}>Our Mission</Text>
                <Text style={styles.text}>
                    We believe that everyone has something to teach and something to learn. Our mission is to democratize education by creating a peer-to-peer network where skills are exchanged freely and connections are made based on shared interests.
                </Text>

                <Text style={styles.sectionTitle}>How It Works</Text>
                <Text style={styles.text}>
                    1. <Text style={styles.bold}>Create a Profile:</Text> Showcase your skills and interests.{'\n'}
                    2. <Text style={styles.bold}>Post a Skill:</Text> Share what you can teach or what you want to learn.{'\n'}
                    3. <Text style={styles.bold}>Connect:</Text> Find others who match your learning or teaching goals and start a conversation.
                </Text>

                <Text style={styles.sectionTitle}>Contact Us</Text>
                <Text style={styles.text}>
                    Have questions or feedback? Reach out to us at support@learnloop.com.
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2025 Learn Loop. All rights reserved.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.card,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
    },
    content: {
        padding: 20,
    },
    description: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        color: colors.textSecondary || colors.textLight,
        lineHeight: 22,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
        color: colors.primary,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        color: colors.textLight,
        fontSize: 12,
    },
});
