import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AddScreen = ({ name }) => {
    const navigation = useNavigation();
    const num = 365;
    const list = [
        {
            title: '입대',
            img: require('../../assets/splash.png'),
        },
        {
            title: '연애',
            img: require('../../assets/splash.png'),
        },
        {
            title: '결혼',
            img: require('../../assets/splash.png'),
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
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
                    <TouchableOpacity>
                        <Feather name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={list}
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                width: 350,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                            }}
                        >
                            <ImageBackground source={item.img}>
                                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    );
                }}
            />
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

export default AddScreen;
