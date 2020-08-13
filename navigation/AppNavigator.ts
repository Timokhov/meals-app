import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScrren';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const AppNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetails: MealDetailsScreen
});

export default createAppContainer(AppNavigator);