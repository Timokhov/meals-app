import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Meal } from '../../models/meal';
import DefaultText from '../DefaultText/DefaultText';
import MealDetails from '../MealDetails/MealDetails';

interface MealItemProps {
    meal: Meal,
    onSelect: () => void
}

const MealItem = (props: MealItemProps) => {
    return (
        <View style={ styles.mealItem }>
            <TouchableNativeFeedback onPress={ props.onSelect }>
                <ImageBackground style={ styles.image }
                                 source={{ uri: props.meal.imageUrl }}>
                    <View style={ styles.infoContainer }>
                        <Text style={ styles.title } numberOfLines={ 1 }>{ props.meal.title }</Text>
                        <MealDetails meal={ props.meal } textColor="white"/>
                    </View>
                </ImageBackground>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    infoContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});

export default MealItem;