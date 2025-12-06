import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SubscriptionScreen() {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const [selectedPlan, setSelectedPlan] = useState('yearly');

    const features = [
        { icon: 'infinite', title: 'Unlimited Connections', description: 'Reach out to as many mentors and learners as you want.' },
        { icon: 'star', title: 'Pro Badge', description: 'Stand out with a verified Pro badge on your profile.' },
        { icon: 'trending-up', title: 'Boosted Visibility', description: 'Appear at the top of search results and the home feed.' },
        { icon: 'remove-circle', title: 'Ad-Free Experience', description: 'Enjoy Learn Loop without any distractions.' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="close" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Learn Loop Pro</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.hero}>
                    <View style={[styles.iconCircle, { backgroundColor: theme.primary + '20' }]}>
                        <Ionicons name="diamond" size={40} color={theme.primary} />
                    </View>
                    <Text style={[styles.heroTitle, { color: theme.text }]}>Upgrade to Pro</Text>
                    <Text style={[styles.heroSubtitle, { color: theme.textLight }]}>Unlock the full potential of your learning journey.</Text>
                </View>

                <View style={styles.featuresList}>
                    {features.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <View style={[styles.featureIcon, { backgroundColor: theme.card }]}>
                                <Ionicons name={feature.icon} size={24} color={theme.primary} />
                            </View>
                            <View style={styles.featureText}>
                                <Text style={[styles.featureTitle, { color: theme.text }]}>{feature.title}</Text>
                                <Text style={[styles.featureDescription, { color: theme.textLight }]}>{feature.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.plansContainer}>
                    <TouchableOpacity
                        style={[
                            styles.planCard,
                            { backgroundColor: theme.card, borderColor: selectedPlan === 'monthly' ? theme.primary : theme.border },
                            selectedPlan === 'monthly' && styles.selectedPlan
                        ]}
                        onPress={() => setSelectedPlan('monthly')}
                        activeOpacity={0.9}
                    >
                        <View style={styles.planHeader}>
                            <Text style={[styles.planName, { color: theme.text }]}>Monthly</Text>
                            {selectedPlan === 'monthly' && <Ionicons name="checkmark-circle" size={24} color={theme.primary} />}
                        </View>
                        <Text style={[styles.planPrice, { color: theme.text }]}>$4.99<Text style={[styles.period, { color: theme.textLight }]}>/mo</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.planCard,
                            { backgroundColor: theme.card, borderColor: selectedPlan === 'yearly' ? theme.primary : theme.border },
                            selectedPlan === 'yearly' && styles.selectedPlan
                        ]}
                        onPress={() => setSelectedPlan('yearly')}
                        activeOpacity={0.9}
                    >
                        <View style={styles.badgeContainer}>
                            <View style={[styles.saveBadge, { backgroundColor: theme.secondary }]}>
                                <Text style={styles.saveText}>SAVE 20%</Text>
                            </View>
                        </View>
                        <View style={styles.planHeader}>
                            <Text style={[styles.planName, { color: theme.text }]}>Yearly</Text>
                            {selectedPlan === 'yearly' && <Ionicons name="checkmark-circle" size={24} color={theme.primary} />}
                        </View>
                        <Text style={[styles.planPrice, { color: theme.text }]}>$49.99<Text style={[styles.period, { color: theme.textLight }]}>/yr</Text></Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.subscribeButton, { backgroundColor: theme.primary }]}>
                    <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.restoreButton}>
                    <Text style={[styles.restoreText, { color: theme.textLight }]}>Restore Purchases</Text>
                </TouchableOpacity>

                <Text style={[styles.disclaimer, { color: theme.textLight }]}>
                    Recurring billing. Cancel anytime.
                </Text>
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 24,
        paddingBottom: 40,
    },
    hero: {
        alignItems: 'center',
        marginBottom: 32,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    heroTitle: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 8,
        textAlign: 'center',
    },
    heroSubtitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    featuresList: {
        marginBottom: 32,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    featureIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    featureText: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    featureDescription: {
        fontSize: 13,
        lineHeight: 18,
    },
    plansContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    planCard: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        borderWidth: 2,
        position: 'relative',
    },
    selectedPlan: {
        // Additional styles for selected plan if needed
    },
    badgeContainer: {
        position: 'absolute',
        top: -10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    saveBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    saveText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    planHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        height: 24,
    },
    planName: {
        fontSize: 16,
        fontWeight: '600',
    },
    planPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    period: {
        fontSize: 14,
        fontWeight: '400',
    },
    subscribeButton: {
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    subscribeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    restoreButton: {
        alignItems: 'center',
        marginBottom: 8,
    },
    restoreText: {
        fontSize: 14,
        fontWeight: '500',
    },
    disclaimer: {
        textAlign: 'center',
        fontSize: 12,
    },
});
