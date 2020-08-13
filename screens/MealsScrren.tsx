import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const MealsScreen = (props: NavigationStackScreenProps) => {

    const navigate = () => {
        props.navigation.navigate({ routeName: 'MealDetails' });
    }

    return (
        <View style={ styles.screen }>
            <Text>MealsScreen</Text>
            <Button title="Go to MealDetails" onPress={ navigate }/>
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