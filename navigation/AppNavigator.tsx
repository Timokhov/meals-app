import React from 'react';
import { createStackNavigator, NavigationStackOptions } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer, NavigationRoute, NavigationRouteConfigMap } from 'react-navigation';
import { Ionicons } from 'expo-vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import { colors } from '../constants/colors';
import FavoriteScreen from '../screens/FavoritesScreen';
import {
    NavigationMaterialBottomTabOptions,
    NavigationTabProp
} from 'react-navigation-material-bottom-tabs/lib/typescript/src/types';
import { NavigationBottomTabOptions } from 'react-navigation-tabs/lib/typescript/src/types';

const defaultStackNavigationOptions: NavigationStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const tabsScreenConfig: NavigationRouteConfigMap<NavigationMaterialBottomTabOptions | NavigationBottomTabOptions, NavigationTabProp<NavigationRoute, any>> = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={ 25 } color={ tabInfo.tintColor }/>
            },
            tabBarColor: colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={ 25 } color={ tabInfo.tintColor }/>
            },
            tabBarColor: colors.accentColor
        }
    }
}

const AppTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabsScreenConfig,
        {
            activeColor: 'white',
            shifting: true,
            resetOnBlur: true
        }
    )
    : createBottomTabNavigator(
        tabsScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: colors.accentColor
            }
        }
    );

export default createAppContainer(AppTabNavigator);