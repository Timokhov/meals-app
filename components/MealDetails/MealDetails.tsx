import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Meal } from '../../models/meal';
import DefaultText from '../DefaultText/DefaultText';

interface MealDetailsProps {
    meal: Meal,
    textColor?: string
}

const MealDetails = (props: MealDetailsProps) => {
    return (
        <View style={ styles.mealDetails }>
            <View style={{ ...styles.detailContainer, ...{ alignItems: 'flex-start' } }}>
                <DefaultText style={{ color: props.textColor }}>
                    { props.meal.duration }m
                </DefaultText>
            </View>
            <View style={{ ...styles.detailContainer, ...{ alignItems: 'center' } }}>
                <DefaultText style={{ color: props.textColor }}>
                    { props.meal.complexity.toUpperCase() }
                </DefaultText>
            </View>
            <View style={{ ...styles.detailContainer, ...{ alignItems: 'flex-end' } }}>
                <DefaultText style={{ color: props.textColor }}>
                    { props.meal.affordability.toUpperCase() }
                </DefaultText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mealDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default MealDetails;