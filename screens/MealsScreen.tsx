import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { Category } from '../models/category';
import { Meal } from '../models/meal';
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MealsScreen = (props: NavigationStackScreenProps) => {
    const category: Category = props.navigation.getParam('category');

    const meals: Meal[] = useSelector(
        (state: RootState) => state.mealsState.filteredMeals
    );

    return (
        <MealsList listData={ meals } navigation={ props.navigation } />
    );
};

MealsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const category: Category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    } as NavigationStackOptions
};

export default MealsScreen;