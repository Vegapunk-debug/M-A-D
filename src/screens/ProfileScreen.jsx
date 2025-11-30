import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colorPallete/colors';

import { useSkills } from '../context/SkillsContext';

const ProfileScreen = () => {
    const { currentUser } = useSkills();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: currentUser.avatar }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{currentUser.name}</Text>
                <Text style={styles.bio}>{currentUser.bio}</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: colors.primary }]}>12</Text>
                    <Text style={styles.statLabel}>Skills</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: colors.secondary }]}>4.8</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: colors.tertiary }]}>156</Text>
                    <Text style={styles.statLabel}>Connections</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="settings-outline" size={24} color={colors.text} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="information-circle-outline" size={24} color={colors.text} />
                        <Text style={styles.menuItemText}>About</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 4,
        borderColor: colors.primary,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textDark,
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        color: colors.textDark,
        textAlign: 'center',
        paddingHorizontal: 40,
        opacity: 0.7,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginTop: 20,
        backgroundColor: colors.card,
        marginHorizontal: 20,
        borderRadius: 16,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.border,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    statLabel: {
        fontSize: 12,
        color: colors.textLight,
        marginTop: 4,
    },
    menuContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
        marginLeft: 12,
    },
});

export default ProfileScreen;
