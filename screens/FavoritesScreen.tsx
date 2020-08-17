import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { Meal } from '../models/meal';

const FavoriteScreen = (props: NavigationStackScreenProps) => {
    const favMeals: Meal[] = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealsList listData={ favMeals } navigation={ props.navigation }/>
    );
};

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
} as NavigationStackOptions

export default FavoriteScreen;