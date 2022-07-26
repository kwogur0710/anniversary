import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import RootStack from './src/route/RootStack.js';

LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
    let [fontsLoaded] = useFonts({
        PretendardBlack: require('./assets/fonts/Pretendard-Black.ttf'),
        PretendardBold: require('./assets/fonts/Pretendard-Bold.ttf'),
        PretendardExtraBold: require('./assets/fonts/Pretendard-ExtraBold.ttf'),
        PretendardExtraLight: require('./assets/fonts/Pretendard-ExtraLight.ttf'),
        PretendardLight: require('./assets/fonts/Pretendard-Light.ttf'),
        PretendardMedium: require('./assets/fonts/Pretendard-Medium.ttf'),
        PretendardRegular: require('./assets/fonts/Pretendard-Regular.ttf'),
        PretendardSemiBold: require('./assets/fonts/Pretendard-SemiBold.ttf'),
        PretendardThin: require('./assets/fonts/Pretendard-Thin.ttf'),
        PretendardVariable: require('./assets/fonts/PretendardVariable.ttf'),
    });
    console.log(fontsLoaded);
    return (
      fontsLoaded ? <RootStack /> : <AppLoading />      
    );
}
