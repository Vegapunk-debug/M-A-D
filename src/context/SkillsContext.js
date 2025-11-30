import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SKILLS as INITIAL_SKILLS, USERS } from '../data/data';

const SkillsContext = createContext();

const STORAGE_KEY = '@skills_data';

export const SkillsProvider = ({ children }) => {
    const [skills, setSkills] = useState([]);
    const [users] = useState(USERS); 
    const [currentUser, setCurrentUser] = useState(USERS[0]); // Default to first user (Tony Stark)
    const [loading, setLoading] = useState(true);

    // Load skills from storage on mount
    useEffect(() => {
        const loadSkills = async () => {
            try {
                const storedSkills = await AsyncStorage.getItem(STORAGE_KEY);
                if (storedSkills) {
                    setSkills(JSON.parse(storedSkills));
                } else {
                    // First time load: use initial mock data
                    setSkills(INITIAL_SKILLS);
                    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SKILLS));
                }
            } catch (error) {
                console.error('Failed to load skills:', error);
                setSkills(INITIAL_SKILLS);
            } finally {
                setLoading(false);
            }
        };

        loadSkills();
    }, []);

    const addSkill = async (newSkill) => {
        try {
            const updatedSkills = [newSkill, ...skills];
            setSkills(updatedSkills);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSkills));
        } catch (error) {
            console.error('Failed to save skill:', error);
        }
    };

    return (
        <SkillsContext.Provider value={{ skills, users, addSkill, loading, currentUser }}>
            {children}
        </SkillsContext.Provider>
    );
};

export const useSkills = () => {
    const context = useContext(SkillsContext);
    if (!context) {
        throw new Error('useSkills must be used within a SkillsProvider');
    }
    return context;
};
