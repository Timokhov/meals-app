import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { Category } from '../models/category';
import { MEALS } from '../data/dummy-data';
import { Meal } from '../models/meal';
import MealsList from '../components/MealsList/MealsList';

const MealsScreen = (props: NavigationStackScreenProps) => {
    const category: Category = props.navigation.getParam('category');
    const meals: Meal[] = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) > -1);

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