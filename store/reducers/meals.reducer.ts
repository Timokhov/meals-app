import { MealsAction, MealsActionType, ToggleFavoriteMealAction } from '../actions/meals.actions';
import { Meal } from '../../models/meal';
import { MEALS } from '../../data/dummy-data';

export interface MealsState {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[]
}

const initialState: MealsState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const onToggleFavorite = (state: MealsState, action: ToggleFavoriteMealAction): MealsState => {
    const existingIndex: number = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
    if (existingIndex > -1) {
        return {
            ...state,
            favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== action.mealId)
        }
    } else {
        const meal: Meal | undefined = state.meals.find(m => m.id === action.mealId);
        if (meal) {
            return {
                ...state,
                favoriteMeals: state.favoriteMeals.concat(meal)
            }
        } else {
            return state;
        }
    }
};

const MealsReducer = (state: MealsState = initialState, action: MealsAction) => {
    switch (action.type) {
        case MealsActionType.TOGGLE_FAVORITE:
            return onToggleFavorite(state, action as ToggleFavoriteMealAction);
        default:
            return state;
    }
}

export default MealsReducer;