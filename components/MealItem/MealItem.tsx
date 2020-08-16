import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Meal } from '../../models/meal';

interface MealItemProps {
    meal: Meal,
    onSelect: () => void
}

const MealItem = (props: MealItemProps) => {
    return (
        <View style={ styles.mealItem }>
            <TouchableNativeFeedback onPress={ props.onSelect }>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground style={ styles.image }
                                         source={{ uri: props.meal.imageUrl }}>
                            <View style={ styles.titleContainer }>
                                <Text style={ styles.title } numberOfLines={ 1 }>{ props.meal.title }</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <Text>{ props.meal.duration }m</Text>
                        <Text>{ props.meal.complexity.toUpperCase() }</Text>
                        <Text>{ props.meal.affordability.toUpperCase() }</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#dedede',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
});

export default MealItem;