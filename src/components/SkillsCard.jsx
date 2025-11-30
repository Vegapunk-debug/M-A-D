import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colorPallete/colors';
import { USERS } from '../data/data';

export default function SkillCard({ skill, onPress }) {
    const user = USERS.find((u) => u.id === skill.userId);
    const isTeach = skill.type === 'teach';

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.header}>
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user?.name}</Text>
                    <Text style={styles.userBio} numberOfLines={1}>{user?.bio}</Text>
                </View>
                <View style={[styles.badge, isTeach ? styles.badgeTeach : styles.badgeLearn]}>
                    <Text style={styles.badgeText}>{isTeach ? 'TEACHING' : 'LEARNING'}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{skill.title}</Text>
                <Text style={styles.category}>{skill.category}</Text>
                <Text style={styles.description} numberOfLines={3}>{skill.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.border,
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
        color: colors.text,
    },
    userBio: {
        fontSize: 12,
        color: colors.textLight,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
    },
    badgeTeach: {
        backgroundColor: colors.primary + '15', 
        borderColor: colors.primary,
    },
    badgeLearn: {
        backgroundColor: colors.secondary + '15',
        borderColor: colors.secondary,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        color: colors.text,
        letterSpacing: 0.5,
    },
    content: {
        marginTop: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 6,
    },
    category: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.tertiary, 
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    description: {
        fontSize: 14,
        color: colors.text,
        lineHeight: 20,
        opacity: 0.8,
    },
});
