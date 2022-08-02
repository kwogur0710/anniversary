import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export const TopBar = ({ name }) => {
    return (
            <View style={styles.topBar}>
                <View style={styles.topIcon}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ListScreen');
                        }}
                    >
                        <Feather name="menu" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text>앱 이름</Text>
                <View style={styles.topIcon}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('AddScreen');
                        }}
                    >
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export const toDate = new Date();
export const toYear = toDate.getFullYear();
export const toMonth = toDate.getMonth() + 1;
export const toDay = toDate.getDay();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    topBar: {
        width: '100%',
        height: 40,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    topIcon: {
        width: 40,
        height: 40,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
