import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colorPallete/colors';

export default function SettingsScreen() {
    const navigation = useNavigation();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const renderSettingItem = (icon, title, type = 'arrow', value = null, onToggle = null) => (
        <TouchableOpacity style={styles.item} activeOpacity={type === 'switch' ? 1 : 0.7}>
            <View style={styles.itemLeft}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={20} color={colors.primary} />
                </View>
                <Text style={styles.itemText}>{title}</Text>
            </View>
            {type === 'switch' ? (
                <Switch
                    trackColor={{ false: colors.border, true: colors.primary }}
                    thumbColor={colors.white}
                    ios_backgroundColor={colors.border}
                    onValueChange={onToggle}
                    value={value}
                />
            ) : (
                <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                <View style={styles.section}>
                    {renderSettingItem('moon', 'Dark Mode', 'switch', isDarkMode, setIsDarkMode)}
                    {renderSettingItem('notifications', 'Notifications', 'switch', notificationsEnabled, setNotificationsEnabled)}
                </View>

                <Text style={styles.sectionTitle}>Account</Text>
                <View style={styles.section}>
                    {renderSettingItem('person', 'Edit Profile')}
                    {renderSettingItem('lock-closed', 'Privacy & Security')}
                    {renderSettingItem('card', 'Subscription')}
                </View>

                <Text style={styles.sectionTitle}>Support</Text>
                <View style={styles.section}>
                    {renderSettingItem('help-circle', 'Help Center')}
                    {renderSettingItem('document-text', 'Terms & Policies')}
                </View>

                <TouchableOpacity style={styles.signOutButton}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>

                <Text style={styles.versionText}>Version 1.0.0</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.card,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.textLight,
        marginBottom: 10,
        marginTop: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    section: {
        backgroundColor: colors.card,
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemText: {
        fontSize: 16,
        color: colors.text,
        fontWeight: '500',
    },
    signOutButton: {
        marginTop: 10,
        backgroundColor: colors.card,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.error,
    },
    signOutText: {
        color: colors.error,
        fontSize: 16,
        fontWeight: '700',
    },
    versionText: {
        textAlign: 'center',
        marginTop: 30,
        color: colors.textLight,
        fontSize: 12,
    },
});
