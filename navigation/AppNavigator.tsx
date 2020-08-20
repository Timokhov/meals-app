import React from 'react';
import { createStackNavigator, NavigationStackOptions } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from 'expo-vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { colors } from '../constants/colors';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavigationOptions: NavigationStackOptions = {
    headerStyle: {
        backgroundColor: colors.primaryColor
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTitleAlign: 'center',
    headerTintColor: 'white'
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

const TabsNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Ionicons name='ios-restaurant' size={ 25 } color={ tabInfo.tintColor }/>
                },
                tabBarLabel: 'Meals'
            }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Ionicons name='ios-star' size={ 25 } color={ tabInfo.tintColor } />
                },
                tabBarLabel: 'Favorites'
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
            activeTintColor: colors.primaryColor,
            inactiveTintColor: '#ccc'
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
            activeTintColor: colors.primaryColor,
            inactiveTintColor: '#ccc',
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 16,
                paddingHorizontal: 30
            }
        }
    }
);

export default createAppContainer(DrawerNavigator);