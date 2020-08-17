import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { Meal } from '../../models/meal';
import MealItem from '../MealItem/MealItem';
import { StackNavigationProp } from 'react-navigation-stack/src/vendor/types';
import { NavigationRoute } from 'react-navigation';

interface MealsListProps {
    listData: Meal[],
    navigation: StackNavigationProp<NavigationRoute, any>
}

const MealsList = (props: MealsListProps) => {

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
        <View style={ styles.mealsListContainer }>
            <FlatList style={ styles.mealsList }
                      data={ props.listData }
                      renderItem={ renderMealItem }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mealsListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealsList: {
        width: '100%',
        padding: 10
    }
});

export default MealsList;