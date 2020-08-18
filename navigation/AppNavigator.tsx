import React from 'react';
import { createStackNavigator, NavigationStackOptions } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer, NavigationRoute, NavigationRouteConfigMap } from 'react-navigation';
import { Ionicons } from 'expo-vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform, Text } from 'react-native';
import { colors } from '../constants/colors';
import FavoriteScreen from '../screens/FavoritesScreen';
import {
    NavigationMaterialBottomTabOptions,
    NavigationTabProp
} from 'react-navigation-material-bottom-tabs/lib/typescript/src/types';
import { NavigationBottomTabOptions } from 'react-navigation-tabs/lib/typescript/src/types';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavigationOptions: NavigationStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTitleAlign: 'center',
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

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavigationOptions
    }
);

const tabsScreenConfig: NavigationRouteConfigMap<NavigationMaterialBottomTabOptions | NavigationBottomTabOptions, NavigationTabProp<NavigationRoute, any>> = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={ 25 } color={ tabInfo.tintColor }/>
            },
            tabBarColor: colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={ 25 } color={ tabInfo.tintColor }/>
            },
            tabBarColor: colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text> : 'Favorites'
        }
    }
}

const TabsNavigator = Platform.OS === 'android'
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
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: colors.accentColor
            }
        }
    );

const DrawerNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: TabsNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: {
            screen: FiltersNavigator,
            navigationOptions: {
                drawerLabel: 'Filters'
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(DrawerNavigator);