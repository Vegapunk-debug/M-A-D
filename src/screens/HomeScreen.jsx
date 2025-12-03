import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSkills } from '../context/SkillsContext';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

export default function HomeScreen() {
    const { skills, users } = useSkills();
    const { theme } = useTheme();
    const { notificationsEnabled, unreadCount, notifications, markAllAsRead } = useNotifications();
    const [showNotifications, setShowNotifications] = useState(false);

    const feedData = users.map(user => {
        const teachSkills = skills.filter(s => s.userId === user.id && s.type === 'teach')
        const learnSkills = skills.filter(s => s.userId === user.id && s.type === 'learn')
        return {
            ...user,
            teach: teachSkills,
            learn: learnSkills
        }
    })

    const handleNotificationPress = () => {
        if (!showNotifications && unreadCount > 0) {
            markAllAsRead();
        }
        setShowNotifications(!showNotifications);
    };

    const renderItem = ({ item }) => {
        const teachText = item.teach.map(s => s.title).join(', ');
        const learnText = item.learn.map(s => s.title).join(', ');

        return (
            <TouchableOpacity style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]} activeOpacity={0.9}>
                <View style={styles.cardHeader}>
                    <Image source={{ uri: item.avatar }} style={[styles.avatar, { backgroundColor: theme.border, borderColor: theme.primary }]} />
                    <View style={styles.headerTextContainer}>
                        <Text style={[styles.userName, { color: theme.text }]}>{item.name}</Text>
                        <Text style={[styles.userBio, { color: theme.textLight }]} numberOfLines={1}>{item.bio}</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color={theme.textLight} />
                </View>

                <View style={[styles.skillsContainer, { backgroundColor: theme.background, borderColor: theme.border }]}>
                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: theme.primary + '15' }]}>
                            <Ionicons name="school" size={16} color={theme.primary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={[styles.skillLabel, { color: theme.textLight }]}>Teaches</Text>
                            <Text style={[styles.skillValue, { color: theme.primary }]}>
                                {teachText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>


                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: theme.secondary + '15' }]}>
                            <Ionicons name="rocket" size={16} color={theme.secondary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={[styles.skillLabel, { color: theme.textLight }]}>Wants to Learn</Text>
                            <Text style={[styles.skillValue, { color: theme.secondary }]}>
                                {learnText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.connectButton, { backgroundColor: theme.primary, shadowColor: theme.primary }]}
                    onPress={() => alert(`Request sent to ${item.name}!`)}
                >
                    <Text style={styles.connectButtonText}>Connect</Text>
                    <Ionicons name="arrow-forward" size={16} color="#fff" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.background }]}>
                <View>
                    <Text style={[styles.headerTitle, { color: theme.text }]}>Learn Loop</Text>
                    <Text style={[styles.headerSubtitle, { color: theme.textLight }]}>Find your perfect skill match</Text>
                </View>
                {notificationsEnabled && (
                    <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
                        <Ionicons name="notifications-outline" size={24} color={theme.text} />
                        {unreadCount > 0 && <View style={[styles.badge, { backgroundColor: theme.secondary }]} />}
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal
                transparent={true}
                visible={showNotifications}
                animationType="fade"
                onRequestClose={() => setShowNotifications(false)}
            >
                <TouchableWithoutFeedback onPress={() => setShowNotifications(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={[styles.notificationPopup, { backgroundColor: theme.card, borderColor: theme.border }]}>
                                <Text style={[styles.popupTitle, { color: theme.text }]}>Notifications</Text>
                                {notifications.length === 0 ? (
                                    <Text style={[styles.emptyText, { color: theme.textLight }]}>No new notifications</Text>
                                ) : (
                                    <FlatList
                                        data={notifications}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) => (
                                            <View style={[styles.notificationItem, { borderBottomColor: theme.border }]}>
                                                <View style={[styles.notificationIcon, { backgroundColor: theme.primary + '20' }]}>
                                                    <Ionicons name="information" size={20} color={theme.primary} />
                                                </View>
                                                <View style={styles.notificationContent}>
                                                    <Text style={[styles.notificationMessage, { color: theme.text }]}>{item.message}</Text>
                                                    <Text style={[styles.notificationTime, { color: theme.textLight }]}>
                                                        {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </Text>
                                                </View>
                                            </View>
                                        )}
                                        style={{ maxHeight: 300 }}
                                    />
                                )}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: -0.5,
    },
    headerSubtitle: {
        fontSize: 13,
        fontWeight: '500',
    },
    notificationButton: {
        padding: 8,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    listContent: {
        padding: 16,
    },
    card: {
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
    },
    headerTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    userName: {
        fontSize: 17,
        fontWeight: '700',
    },
    userBio: {
        fontSize: 13,
        marginTop: 2,
    },
    skillsContainer: {
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
    },
    skillRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    iconBadge: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    skillTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    skillLabel: {
        fontSize: 11,
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    skillValue: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
    connectButton: {
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    connectButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 60,
        paddingRight: 20,
    },
    notificationPopup: {
        width: 300,
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    popupTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    emptyText: {
        textAlign: 'center',
        padding: 20,
        fontStyle: 'italic',
    },
    notificationItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    notificationIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    notificationContent: {
        flex: 1,
    },
    notificationMessage: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    notificationTime: {
        fontSize: 10,
    },
});
