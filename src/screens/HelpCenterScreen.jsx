import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function HelpCenterScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();

    const faqs = [
        {
            question: "How do I add a skill?",
            answer: "Go to the 'Add' tab in the bottom navigation bar. Fill in the details about the skill you want to teach or learn, and click 'Post Skill'."
        },
        {
            question: "How do I connect with others?",
            answer: "Browse skills in the 'Home' or 'Explore' tabs. When you find a skill you're interested in, click the 'Connect' button on the card."
        },
        {
            question: "Is Learn Loop free?",
            answer: "Yes, Learn Loop is currently free to use for all users."
        },
        {
            question: "How can I delete my account?",
            answer: "Please contact our support team at support@learnloop.com to request account deletion."
        }
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Help Center</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.introText, { color: theme.textLight }]}>
                    Frequently Asked Questions
                </Text>

                {faqs.map((faq, index) => (
                    <View key={index} style={[styles.faqItem, { backgroundColor: theme.card, borderColor: theme.border }]}>
                        <Text style={[styles.question, { color: theme.text }]}>{faq.question}</Text>
                        <Text style={[styles.answer, { color: theme.textLight }]}>{faq.answer}</Text>
                    </View>
                ))}

                <View style={[styles.contactSection, { backgroundColor: theme.primary + '10', borderColor: theme.primary }]}>
                    <Text style={[styles.contactTitle, { color: theme.primary }]}>Still need help?</Text>
                    <Text style={[styles.contactText, { color: theme.text }]}>
                        Contact our support team anytime.
                    </Text>
                    <TouchableOpacity style={[styles.contactButton, { backgroundColor: theme.primary }]}>
                        <Text style={styles.contactButtonText}>Contact Support</Text>
                    </TouchableOpacity>
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
    introText: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: '500',
    },
    faqItem: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        borderWidth: 1,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    answer: {
        fontSize: 14,
        lineHeight: 22,
    },
    contactSection: {
        marginTop: 20,
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
    contactButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
