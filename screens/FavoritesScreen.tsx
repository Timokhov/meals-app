import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { Meal } from '../models/meal';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

const FavoriteScreen = (props: NavigationStackScreenProps) => {
    const favMeals: Meal[] = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealsList listData={ favMeals } navigation={ props.navigation }/>
    );
};

FavoriteScreen.navigationOptions = (navigationData: NavigationDrawerScreenProps) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Menu' iconName='ios-menu'
                          onPress={ () => navigationData.navigation.toggleDrawer() }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default FavoriteScreen;