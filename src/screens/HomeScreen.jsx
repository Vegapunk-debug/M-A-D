import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SKILLS, USERS } from '../data/data';
import { COLORS } from '../colorPallete/colors';

export default function HomeScreen() {

    const feedData = USERS.map(user => {
        const teachSkills = SKILLS.filter(s => s.userId === user.id && s.type === 'teach')
        const learnSkills = SKILLS.filter(s => s.userId === user.id && s.type === 'learn')
        return {...user,
            teach: teachSkills,
            learn: learnSkills
        }
    })

    const renderItem = ({ item }) => {
        const teachText = item.teach.map(s => s.title).join(', ');
        const learnText = item.learn.map(s => s.title).join(', ');

        return (
            <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                <View style={styles.cardHeader}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userBio} numberOfLines={1}>{item.bio}</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.iconDefault} />
                </View>

                <View style={styles.skillsContainer}>
                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: COLORS.primary + '15' }]}>
                            <Ionicons name="school" size={16} color={COLORS.primary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={styles.skillLabel}>Teaches</Text>
                            <Text style={[styles.skillValue, { color: COLORS.primary }]}>
                                {teachText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.skillRow}>
                        <View style={[styles.iconBadge, { backgroundColor: COLORS.secondary + '15' }]}>
                            <Ionicons name="rocket" size={16} color={COLORS.secondary} />
                        </View>
                        <View style={styles.skillTextContainer}>
                            <Text style={styles.skillLabel}>Wants to Learn</Text>
                            <Text style={[styles.skillValue, { color: COLORS.secondary }]}>
                                {learnText || "Nothing listed"}
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.connectButton}>
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
                    <Ionicons name="notifications-outline" size={24} color={COLORS.text} />
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
        backgroundColor: COLORS.background, 
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: COLORS.card,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.text, 
        letterSpacing: -0.5,
    },
    headerSubtitle: {
        fontSize: 13,
        color: COLORS.textSecondary,
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
        backgroundColor: COLORS.secondary, 
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 12,
        elevation: 3,
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
        backgroundColor: COLORS.border,
        borderWidth: 2,
        borderColor: COLORS.background,
    },
    headerTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    userName: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.text,
    },
    userBio: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    skillsContainer: {
        backgroundColor: COLORS.background, 
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
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
        color: COLORS.textSecondary,
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    skillValue: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
    connectButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    connectButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});