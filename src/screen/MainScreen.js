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
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { TopBar, toYear, toMonth, toDay } from '../components/MainComponents/TopBar';

const MainScreen = ({ name }) => {
    const navigation = useNavigation();
    const toDate = new Date();
    const fromDate = new Date(2022, 6, 11);
    const dDate = toDate.getDate() - fromDate.getDate();
    const list = new Date();
    const num = [0, 100, 200, 300, 400];
    console.log(toDate, fromDate, dDate);
    return (
        <SafeAreaView style={styles.container}>
            <TopBar />
            <ImageBackground
                style={{
                    width: '100%',
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                imageStyle={{ borderRadius: 10 }}
                source={require('../../assets/test.jpeg')}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        borderRadius: 10,
                        fontSize: 20,
                        backgroundColor: 'rgba(255, 255, 255,0.6)',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                        }}
                    >
                        {fromDate.getFullYear()}년 {fromDate.getMonth() + 1}월 {fromDate.getDate()}
                        일
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        입대한지 {dDate}일쨰
                    </Text>
                </View>
            </ImageBackground>
            <FlatList
                data={num}
                style={{ marginTop: 10 }}
                renderItem={({ item }) => {
                    list.setDate(fromDate.getDate() + item);
                    console.log(list, item);
                    return (
                        <View
                            style={{
                                width: 350,
                                height: 80,
                                paddingLeft: 20,
                                paddingRight: 20,
                                borderColor: 'gray',
                                borderBottomWidth: 1,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>
                                {' '}
                                {list.getFullYear()}.{list.getMonth()}.{list.getDate()}
                            </Text>
                            <Text style={{ fontSize: 20 }}> D+{item} </Text>
                        </View>
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

export default MainScreen;
