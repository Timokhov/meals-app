import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';

enableScreens();

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={ fetchFonts } onFinish={ () => setFontLoaded(true) }/>
    }

    return (
        <Provider store={ store }>
            <AppNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({});
