import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../colorPallete/colors';

import { useSkills } from '../context/SkillsContext';

export default function AddSkillScreen() {
    const { addSkill, currentUser } = useSkills();
    const navigation = useNavigation();
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

        Alert.alert('Success', 'Skill added successfully!', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.headerTitle}>Add New Skill</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>I want to...</Text>
                    <View style={styles.typeContainer}>
                        <TouchableOpacity
                            style={[styles.typeButton, type === 'teach' && styles.typeButtonActive]}
                            onPress={() => setType('teach')}
                        >
                            <Text style={[styles.typeText, type === 'teach' && styles.typeTextActive]}>TEACH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.typeButton, type === 'learn' && styles.typeButtonActive]}
                            onPress={() => setType('learn')}
                        >
                            <Text style={[styles.typeText, type === 'learn' && styles.typeTextActive]}>LEARN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Skill Title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Portrait Photography"
                        placeholderTextColor={colors.textLight}
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Category</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Photography"
                        placeholderTextColor={colors.textLight}
                        value={category}
                        onChangeText={setCategory}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describe what you can teach or want to learn..."
                        placeholderTextColor={colors.textLight}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                    />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Post Skill</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    content: {
        padding: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textDark,
        marginBottom: 32,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textDark,
        marginBottom: 8,
    },
    input: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: colors.text,
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
        borderColor: colors.border,
        alignItems: 'center',
    },
    typeButtonActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    typeText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.textDark,
    },
    typeTextActive: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: colors.primary,
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
