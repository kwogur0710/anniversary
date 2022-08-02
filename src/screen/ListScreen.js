import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ListScreen = ({ name }) => {
    const navigatie = useNavigation();
    const num = 365;
    const list = [100, 200, 300, 365];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.topIcon}>
                    <TouchableOpacity>
                        <Feather name="menu" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text>앱 이름</Text>
                <View style={styles.topIcon}>
                    <TouchableOpacity>
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={list}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                borderWidth: 1,
                                width: 350,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                            }}
                        >
                            <Text>입대한지 {item}일째</Text>
                        </View>
                    );
                }}
            />
            {/*<TouchableOpacity style={styles.btn}>
                <Text> 일까지 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text> 일부터 </Text>
            </TouchableOpacity>
            */}
            {/*<FlatList style={{ width: '100%', height: '100%', borderWidth: 1 }} />*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
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
    btn: {
        width: 200,
        height: 40,
        borderRadius: 10,
        padding: 4,
        margin: 6,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ListScreen;
