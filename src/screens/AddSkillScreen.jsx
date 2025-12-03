import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSkills } from '../context/SkillsContext';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

export default function AddSkillScreen() {
    const { addSkill, currentUser } = useSkills();
    const navigation = useNavigation();
    const { theme } = useTheme();
    const { addNotification } = useNotifications();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('teach');

    const handleSubmit = () => {
        if (!title || !description || !category) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        const newSkill = {
            id: Date.now().toString(),
            userId: currentUser.id,
            title,
            description,
            category,
            type,
        };

        addSkill(newSkill);
        addNotification(`New skill added: ${title} `);

        Alert.alert('Success', 'Skill added successfully!', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.headerTitle, { color: theme.textDark }]}>Add New Skill</Text>

                <View style={styles.formGroup}>
                    <Text style={[styles.label, { color: theme.textDark }]}>I want to...</Text>
                    <View style={styles.typeContainer}>
                        <TouchableOpacity
                            style={[styles.typeButton, { borderColor: theme.border }, type === 'teach' && { backgroundColor: theme.primary, borderColor: theme.primary }]}
                            onPress={() => setType('teach')}
                        >
                            <Text style={[styles.typeText, { color: theme.textDark }, type === 'teach' && styles.typeTextActive]}>TEACH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.typeButton, { borderColor: theme.border }, type === 'learn' && { backgroundColor: theme.primary, borderColor: theme.primary }]}
                            onPress={() => setType('learn')}
                        >
                            <Text style={[styles.typeText, { color: theme.textDark }, type === 'learn' && styles.typeTextActive]}>LEARN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={[styles.label, { color: theme.textDark }]}>Skill Title</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.card, borderColor: theme.border, color: theme.text }]}
                        placeholder="e.g. Portrait Photography"
                        placeholderTextColor={theme.textLight}
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={[styles.label, { color: theme.textDark }]}>Category</Text>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.card, borderColor: theme.border, color: theme.text }]}
                        placeholder="e.g. Photography"
                        placeholderTextColor={theme.textLight}
                        value={category}
                        onChangeText={setCategory}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={[styles.label, { color: theme.textDark }]}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea, { backgroundColor: theme.card, borderColor: theme.border, color: theme.text }]}
                        placeholder="Describe what you can teach or want to learn..."
                        placeholderTextColor={theme.textLight}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                    />
                </View>

                <TouchableOpacity style={[styles.submitButton, { backgroundColor: theme.primary, shadowColor: theme.primary }]} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Post Skill</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    content: {
        padding: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    typeContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    typeButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
    },
    typeText: {
        fontSize: 14,
        fontWeight: '700',
    },
    typeTextActive: {
        color: '#fff',
    },
    submitButton: {
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
