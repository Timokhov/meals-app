import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { Meal } from '../../models/meal';
import MealItem from '../MealItem/MealItem';

interface MealsListProps {
    listData: Meal[],
    onSelectMeal: (meal: Meal) => void
}

const MealsList = (props: MealsListProps) => {

    const renderMealItem = (itemInfo: ListRenderItemInfo<Meal>) => {
        return <MealItem meal={ itemInfo.item } onSelect={ () => props.onSelectMeal(itemInfo.item) }/>
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