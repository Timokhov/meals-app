import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Meal } from '../models/meal';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import DefaultText from '../components/DefaultText/DefaultText';
import ListItem from '../components/ListItem/ListItem';

const MealDetailsScreen = (props: NavigationStackScreenProps) => {

    const meal: Meal = props.navigation.getParam('meal');

    return (
        <ScrollView>
            <Image style={ styles.image } source={{ uri: meal.imageUrl }}/>
            <View style={ styles.details }>
                <DefaultText>{ meal.duration }m</DefaultText>
                <DefaultText>{ meal.complexity.toUpperCase() }</DefaultText>
                <DefaultText>{ meal.affordability.toUpperCase() }</DefaultText>
            </View>
            <Text style={ styles.title }>Ingredients</Text>
            {
                meal.ingredients.map(ingredient => {
                    return (
                        <ListItem key={ ingredient }>{ ingredient }</ListItem>
                    );
                })
            }
            <Text style={ styles.title }>Steps</Text>
            {
                meal.steps.map(step => {
                    return (
                        <ListItem key={ step }>{ step }</ListItem>
                    );
                })
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    }
});

MealDetailsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const meal: Meal = navigationData.navigation.getParam('meal');
    return {
        headerTitle: meal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Favorite' iconName='ios-star' onPress={ () => console.log('Marked as favorite') }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default MealDetailsScreen;