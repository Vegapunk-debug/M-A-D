import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function TermsPoliciesScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Terms & Policies</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Terms of Service</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        1. <Text style={{ fontWeight: 'bold' }}>Acceptance of Terms:</Text> By accessing and using Learn Loop, you agree to comply with and be bound by these Terms of Service.
                        {'\n\n'}
                        2. <Text style={{ fontWeight: 'bold' }}>User Conduct:</Text> You agree to use the platform for lawful purposes only. Harassment, hate speech, and inappropriate content are strictly prohibited.
                        {'\n\n'}
                        3. <Text style={{ fontWeight: 'bold' }}>Content Ownership:</Text> You retain ownership of the content you post, but you grant Learn Loop a license to display and distribute it on the platform.
                    </Text>
                </View>

                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Community Guidelines</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        - Be respectful and kind to other learners and teachers.
                        {'\n'}- Keep interactions professional and focused on skill sharing.
                        {'\n'}- Report any suspicious or harmful behavior immediately.
                    </Text>
                </View>

                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Cookie Policy</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By continuing to use the site, you agree to our use of cookies.
                    </Text>
                </View>

                <Text style={[styles.lastUpdated, { color: theme.textLight }]}>Last updated: December 2025</Text>
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
    section: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        lineHeight: 24,
    },
    lastUpdated: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 20,
        marginBottom: 40,
        fontStyle: 'italic',
    },
});
