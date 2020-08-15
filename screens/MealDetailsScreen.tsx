import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const MealDetailsScreen = (props: NavigationStackScreenProps) => {

    const goToCategories = () => {
        props.navigation.popToTop();
    };

    return (
        <View style={ styles.screen }>
            <Text>MealDetailsScreen</Text>
            <Button title="Go Back to Categories" onPress={ goToCategories }/>
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

export default MealDetailsScreen;