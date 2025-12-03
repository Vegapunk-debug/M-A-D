
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSkills } from '../context/SkillsContext';
import { useTheme } from '../context/ThemeContext';

const CATEGORIES = ['All', 'Programming', 'AI', 'Systems', 'Science', 'Cloud', 'Mobile', 'Data'];

export default function Explore() {
    const { skills, users } = useSkills();
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredSkills = skills.filter(skill => {
        const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryChip,
                { backgroundColor: theme.card, borderColor: theme.border },
                selectedCategory === item && { backgroundColor: theme.primary, borderColor: theme.primary }
            ]}
            onPress={() => setSelectedCategory(item)}
        >
            <Text style={[
                styles.categoryText,
                { color: theme.textLight },
                selectedCategory === item && styles.categoryTextActive
            ]}>{item}</Text>
        </TouchableOpacity>
    );

    const renderSkillItem = ({ item }) => {
        const user = users.find(u => u.id === item.userId);
        return (
            <TouchableOpacity style={[styles.resultCard, { backgroundColor: theme.card, borderColor: theme.border }]} activeOpacity={0.7}>
                <View style={styles.resultHeader}>
                    <View style={[styles.iconContainer, { backgroundColor: theme.background, borderColor: theme.border }]}>
                        <Ionicons
                            name={item.type === 'teach' ? 'school' : 'rocket'}
                            size={20}
                            color={item.type === 'teach' ? theme.primary : theme.secondary}
                        />
                    </View>
                    <View style={styles.resultTextContent}>
                        <Text style={[styles.resultTitle, { color: theme.text }]}>{item.title}</Text>
                        <Text style={[styles.resultUser, { color: theme.textLight }]}>by {user?.name}</Text>
                    </View>
                    <View style={styles.arrowContainer}>
                        <Ionicons name="chevron-forward" size={20} color={theme.textLight} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: theme.text }]}>Explore</Text>
                <View style={[styles.searchContainer, { backgroundColor: theme.card, borderColor: theme.border, shadowColor: theme.primary }]}>
                    <Ionicons name="search" size={20} color={theme.textLight} style={styles.searchIcon} />
                    <TextInput
                        placeholder="What do you want to learn?"
                        style={[styles.input, { color: theme.text }]}
                        placeholderTextColor={theme.textLight}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <View style={styles.categoriesContainer}>
                <FlatList
                    horizontal
                    data={CATEGORIES}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesList}
                />
            </View>

            <View style={styles.resultsContainer}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                    {searchQuery ? 'Search Results' : 'Trending Skills'}
                </Text>
                <FlatList
                    data={filteredSkills}
                    renderItem={renderSkillItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.resultsList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        marginBottom: 20,
    },
    searchContainer: {
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    categoriesContainer: {
        marginBottom: 20,
    },
    categoriesList: {
        paddingHorizontal: 20,
        gap: 10,
    },
    categoryChip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        borderWidth: 1,
        marginRight: 8,
    },
    categoryText: {
        fontWeight: '600',
        fontSize: 14,
    },
    categoryTextActive: {
        color: '#FFF',
        fontWeight: '700',
    },
    resultsContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 15,
    },
    resultsList: {
        paddingBottom: 20,
    },
    resultCard: {
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    resultHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        borderWidth: 1,
    },
    resultTextContent: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    resultUser: {
        fontSize: 12,
    },
    arrowContainer: {
        marginLeft: 8,
    },
});
