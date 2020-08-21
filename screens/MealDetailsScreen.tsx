import React, { Dispatch, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Meal } from '../models/meal';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import ListItem from '../components/ListItem/ListItem';
import MealDetails from '../components/MealDetails/MealDetails';
import { toggleFavorite } from '../store/actions/meals.actions';
import { RootState } from '../store/store';

const MealDetailsScreen = (props: NavigationStackScreenProps) => {

    const meal: Meal = props.navigation.getParam('meal');

    const isMealFavorite: boolean = useSelector(
        (state: RootState) => state.mealsState.favoriteMeals.some(m => m.id === meal.id)
    );

    const dispatch: Dispatch<Action> = useDispatch();
    const dispatchToggleFavorite = useCallback(
        () => dispatch(toggleFavorite(meal.id)),
        [dispatch, meal]
    );

    useEffect(() => {
        props.navigation.setParams({ toggleFavorite: dispatchToggleFavorite });
    }, [dispatchToggleFavorite]);

    useEffect(() => {
        props.navigation.setParams({ isFavorite: isMealFavorite });
    }, [isMealFavorite]);

    return (
        <ScrollView>
            <Image style={ styles.image } source={{ uri: meal.imageUrl }}/>
            <View style={ styles.detailsContainer }>
                <MealDetails meal={ meal }/>
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
    detailsContainer: {
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    }
});

MealDetailsScreen.navigationOptions = (navigationData: NavigationStackScreenProps) => {
    const meal: Meal = navigationData.navigation.getParam('meal');
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
    const isFavorite: boolean = navigationData.navigation.getParam('isFavorite');

    return {
        headerTitle: meal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Favorite'
                          iconName={ isFavorite ? 'ios-star' : 'ios-star-outline' }
                          onPress={ toggleFavorite }
                    />
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default MealDetailsScreen;