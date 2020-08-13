import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealsScreen = () => {

    return (
        <View style={ styles.screen }>
            <Text>MealsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealsScreen;