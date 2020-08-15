import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { Category } from '../models/category';

const MealsScreen = (props: NavigationStackScreenProps) => {

    const category: Category = props.navigation.getParam('category');

    const navigate = () => {
        props.navigation.navigate({ routeName: 'MealDetails' });
    };

    const goBack = () => {
        props.navigation.pop();
    };

    return (
        <View style={ styles.screen }>
            <Text>{ category?.title }</Text>
            <Button title="Go to MealDetails" onPress={ navigate }/>
            <Button title="GoBack" onPress={ goBack }/>
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

MealsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const category: Category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    } as NavigationStackOptions
};

export default MealsScreen;