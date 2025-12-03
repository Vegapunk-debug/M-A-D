import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSkills } from '../context/SkillsContext';
import { useTheme } from '../context/ThemeContext';

const ProfileScreen = () => {
    const { currentUser } = useSkills();
    const navigation = useNavigation();
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Image
                    source={{ uri: currentUser.avatar }}
                    style={[styles.avatar, { borderColor: theme.primary }]}
                />
                <Text style={[styles.name, { color: theme.textDark }]}>{currentUser.name}</Text>
                <Text style={[styles.bio, { color: theme.textDark }]}>{currentUser.bio}</Text>
            </View>

            <View style={[styles.statsContainer, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]}>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: theme.primary }]}>12</Text>
                    <Text style={[styles.statLabel, { color: theme.textLight }]}>Skills</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: theme.secondary }]}>4.8</Text>
                    <Text style={[styles.statLabel, { color: theme.textLight }]}>Rating</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: theme.tertiary }]}>156</Text>
                    <Text style={[styles.statLabel, { color: theme.textLight }]}>Connections</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={[styles.menuItem, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]} onPress={() => navigation.navigate('Settings')}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="settings-outline" size={24} color={theme.text} />
                        <Text style={[styles.menuItemText, { color: theme.text }]}>Settings</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={theme.textLight} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuItem, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]} onPress={() => navigation.navigate('About')}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="information-circle-outline" size={24} color={theme.text} />
                        <Text style={[styles.menuItemText, { color: theme.text }]}>About</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={theme.textLight} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 40,
        opacity: 0.7,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
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
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
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
        marginLeft: 12,
    },
});

export default ProfileScreen;
