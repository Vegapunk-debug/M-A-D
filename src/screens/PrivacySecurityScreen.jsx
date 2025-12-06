import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function PrivacySecurityScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Privacy & Security</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Data Privacy</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        We take your data privacy seriously. Your personal information is encrypted and stored securely. We do not sell your data to third parties.
                    </Text>
                </View>

                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Account Security</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        - Two-factor authentication is available.
                        {'\n'}- We recommend using a strong, unique password.
                        {'\n'}- Suspicious activity will be flagged and notified.
                    </Text>
                </View>

                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Visibility</Text>
                    <Text style={[styles.text, { color: theme.textLight }]}>
                        You can control who sees your profile and skills in the "Edit Profile" section. By default, your profile is public to other Learn Loop users.
                    </Text>
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
});
