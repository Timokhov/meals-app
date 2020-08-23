import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { Category } from '../models/category';
import { Meal } from '../models/meal';
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText/DefaultText';

const MealsScreen = (props: NavigationStackScreenProps) => {
    const category: Category = props.navigation.getParam('category');

    const meals: Meal[] = useSelector(
        (state: RootState) => state.mealsState.filteredMeals
            .filter(meal => meal.categoryIds.indexOf(category.id) > -1)
    );

    const selectMeal = (meal: Meal) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                meal: meal
            }
        });
    };

    if (!meals || meals.length === 0) {
        return (
            <View style={ styles.noMealsMessage }>
                <DefaultText>No meals found, maybe check your filters.</DefaultText>
            </View>
        );
    }

    return (
        <MealsList listData={ meals } onSelectMeal={ selectMeal } />
    );
};

const styles = StyleSheet.create({
    noMealsMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

MealsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const category: Category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    } as NavigationStackOptions
};

export default MealsScreen;