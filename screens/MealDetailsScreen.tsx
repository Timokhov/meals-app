import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Meal } from '../models/meal';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

const MealDetailsScreen = (props: NavigationStackScreenProps) => {

    const meal: Meal = props.navigation.getParam('meal');

    const goToCategories = () => {
        props.navigation.popToTop();
    };

    return (
        <View style={ styles.screen }>
            <Text>{ meal.title }</Text>
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

MealDetailsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const meal: Meal = navigationData.navigation.getParam('meal');
    return {
        headerTitle: meal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Favorite' iconName='ios-star' onPress={ () => console.log('Marked as favorite') }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default MealDetailsScreen;