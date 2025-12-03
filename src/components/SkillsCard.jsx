import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { USERS } from '../data/data';
import { useTheme } from '../context/ThemeContext';

export default function SkillCard({ skill, onPress }) {
    const user = USERS.find((u) => u.id === skill.userId);
    const isTeach = skill.type === 'teach';
    const { theme } = useTheme();

    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.header}>
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={[styles.userName, { color: theme.text }]}>{user?.name}</Text>
                    <Text style={[styles.userBio, { color: theme.textLight }]} numberOfLines={1}>{user?.bio}</Text>
                </View>
                <View style={[styles.badge, isTeach ? { backgroundColor: theme.primary + '15', borderColor: theme.primary } : { backgroundColor: theme.secondary + '15', borderColor: theme.secondary }]}>
                    <Text style={[styles.badgeText, { color: theme.text }]}>{isTeach ? 'TEACHING' : 'LEARNING'}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.text }]}>{skill.title}</Text>
                <Text style={[styles.category, { color: theme.tertiary }]}>{skill.category}</Text>
                <Text style={[styles.description, { color: theme.text }]} numberOfLines={3}>{skill.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    userBio: {
        fontSize: 12,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    content: {
        marginTop: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
    },
    category: {
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        opacity: 0.8,
    },
});
