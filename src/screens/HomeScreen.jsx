import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colorPallete/colors';
import { useSkills } from '../context/SkillsContext';

export default function HomeScreen() {
    const { skills, users } = useSkills();

    const feedData = users.map(user => {
        const teachSkills = skills.filter(s => s.userId === user.id && s.type === 'teach')
        const learnSkills = skills.filter(s => s.userId === user.id && s.type === 'learn')
        return {
            ...user,
            teach: teachSkills,
            learn: learnSkills
        }
    })

    const renderItem = ({ item }) => {
        // Helper to join skill titles into a string
        const teachText = item.teach.map(s => s.title).join(', ');
        const learnText = item.learn.map(s => s.title).join(', ');

        return (
            <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                {/* Card Header: Avatar + Name */}
                <View style={styles.cardHeader}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userBio} numberOfLines={1}>{item.bio}</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color={colors.textLight} />
                </View>

                {/* Skills Section */}
                <View style={styles.skillsContainer}>
                    {/* TEACHING ROW (Primary Blue) */}
                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: colors.primary + '15' }]}>
                            <Ionicons name="school" size={16} color={colors.primary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={styles.skillLabel}>Teaches</Text>
                            <Text style={[styles.skillValue, { color: colors.primary }]}>
                                {teachText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>

                    {/* LEARNING ROW (Secondary Pink) */}
                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: colors.secondary + '15' }]}>
                            <Ionicons name="rocket" size={16} color={colors.secondary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={styles.skillLabel}>Wants to Learn</Text>
                            <Text style={[styles.skillValue, { color: colors.secondary }]}>
                                {learnText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Action Button */}
                <TouchableOpacity
                    style={styles.connectButton}
                    onPress={() => alert(`Request sent to ${item.name}!`)}
                >
                    <Text style={styles.connectButtonText}>Connect</Text>
                    <Ionicons name="arrow-forward" size={16} color="#fff" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Learn Loop</Text>
                    <Text style={styles.headerSubtitle}>Find your perfect skill match</Text>
                </View>
                <TouchableOpacity style={styles.notificationButton}>
                    <Ionicons name="notifications-outline" size={24} color={colors.text} />
                    <View style={styles.badge} />
                </TouchableOpacity>
            </View>

            {/* Feed List */}
            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.background, // Match background to avoid card look in header if desired, or keep as card
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth: 1, // Removed border for cleaner look with dark theme
        // borderBottomColor: colors.border,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: colors.text,
        letterSpacing: -0.5,
    },
    headerSubtitle: {
        fontSize: 13,
        color: colors.textLight,
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
        backgroundColor: colors.secondary,
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: colors.card,
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.primary, // Neon glow
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
        backgroundColor: colors.border,
        borderWidth: 2,
        borderColor: colors.primary, // Neon border
    },
    headerTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    userName: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.text,
    },
    userBio: {
        fontSize: 13,
        color: colors.textLight,
        marginTop: 2,
    },
    skillsContainer: {
        backgroundColor: colors.background, // Inset background
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.border,
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
        color: colors.textLight,
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    skillValue: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
    connectButton: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.primary,
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
});
