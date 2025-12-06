import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

export default function SettingsScreen() {
    const navigation = useNavigation();
    const { theme, isDarkMode, toggleTheme } = useTheme();
    const { notificationsEnabled, setNotificationsEnabled } = useNotifications();

    const renderSettingItem = (icon, title, type = 'arrow', value = null, onToggle = null) => (
        <TouchableOpacity
            style={[styles.item, { borderBottomColor: theme.border }]}
            activeOpacity={type === 'switch' ? 1 : 0.7}
            onPress={type !== 'switch' ? onToggle : null}
        >
            <View style={styles.itemLeft}>
                <View style={[styles.iconContainer, { backgroundColor: theme.iconBackground || theme.background }]}>
                    <Ionicons name={icon} size={20} color={theme.primary} />
                </View>
                <Text style={[styles.itemText, { color: theme.text }]}>{title}</Text>
            </View>
            {type === 'switch' ? (
                <Switch
                    trackColor={{ false: theme.border, true: theme.primary }}
                    thumbColor={theme.white}
                    ios_backgroundColor={theme.border}
                    onValueChange={onToggle}
                    value={value}
                />
            ) : (
                <Ionicons name="chevron-forward" size={20} color={theme.textLight} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.sectionTitle, { color: theme.textLight }]}>Preferences</Text>
                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    {renderSettingItem('moon', 'Dark Mode', 'switch', isDarkMode, toggleTheme)}
                    {renderSettingItem('notifications', 'Notifications', 'switch', notificationsEnabled, setNotificationsEnabled)}
                </View>

                <Text style={[styles.sectionTitle, { color: theme.textLight }]}>Account</Text>
                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    {renderSettingItem('person', 'Edit Profile')}
                    {renderSettingItem('lock-closed', 'Privacy & Security', 'arrow', null, () => navigation.navigate('PrivacySecurity'))}
                    {renderSettingItem('card', 'Subscription', 'arrow', null, () => navigation.navigate('Subscription'))}
                </View>

                <Text style={[styles.sectionTitle, { color: theme.textLight }]}>Support</Text>
                <View style={[styles.section, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    {renderSettingItem('help-circle', 'Help Center', 'arrow', null, () => navigation.navigate('HelpCenter'))}
                    {renderSettingItem('document-text', 'Terms & Policies', 'arrow', null, () => navigation.navigate('TermsPolicies'))}
                </View>

                <TouchableOpacity style={[styles.signOutButton, { backgroundColor: theme.card, borderColor: theme.error }]}>
                    <Text style={[styles.signOutText, { color: theme.error }]}>Sign Out</Text>
                </TouchableOpacity>

                <Text style={[styles.versionText, { color: theme.textLight }]}>Version 1.0.0</Text>
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
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    section: {
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 1,
        overflow: 'hidden',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemText: {
        fontSize: 16,
        fontWeight: '500',
    },
    signOutButton: {
        marginTop: 10,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
    },
    signOutText: {
        fontSize: 16,
        fontWeight: '700',
    },
    versionText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 12,
    },
});
