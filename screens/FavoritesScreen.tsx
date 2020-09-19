import React from 'react';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import MealsList from '../components/MealsList/MealsList';
import { Meal } from '../models/meal';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText/DefaultText';

const FavoriteScreen = (props: NavigationStackScreenProps) => {

    const favMeals: Meal[] = useSelector(
        (state: RootState) => state.mealsState.favoriteMeals
    );

    const selectMeal = (meal: Meal) => {
        props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
                meal: meal
            }
        });
    };

    if (!favMeals || favMeals.length === 0) {
       return (
           <View style={ styles.emptyMessageContainer }>
               <DefaultText>No Favorite meals found.</DefaultText>
           </View>
       );
    }

    return (
        <MealsList listData={ favMeals } onSelectMeal={ selectMeal }/>
    );
};

const styles = StyleSheet.create({
    emptyMessageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

FavoriteScreen.navigationOptions = (navigationData: NavigationDrawerScreenProps) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Menu' iconName='ios-menu'
                          onPress={ () => navigationData.navigation.toggleDrawer() }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default FavoriteScreen;