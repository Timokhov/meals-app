import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { Category } from '../models/category';
import { MEALS } from '../data/dummy-data';
import { Meal } from '../models/meal';
import MealItem from '../components/MealItem/MealItem';

const MealsScreen = (props: NavigationStackScreenProps) => {

    const category: Category = props.navigation.getParam('category');
    const meals: Meal[] = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) > -1);

    const selectMeal = (meal: Meal) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                meal: meal
            }
        });
    };

    const renderMealItem = (itemInfo: ListRenderItemInfo<Meal>) => {
        return <MealItem meal={ itemInfo.item } onSelect={ () => selectMeal(itemInfo.item) }/>
    }

    return (
        <View style={ styles.screen }>
            <FlatList style={ styles.mealsList }
                      data={ meals }
                      renderItem={ renderMealItem }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealsList: {
        width: '100%',
        padding: 10
    }
});

MealsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const category: Category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    } as NavigationStackOptions
};

export default MealsScreen;