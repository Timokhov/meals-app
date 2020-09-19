import { MealsAction, MealsActionType, SetFiltersAction, ToggleFavoriteMealAction } from '../actions/meals.actions';
import { Meal } from '../../models/meal';
import { MEALS } from '../../data/dummy-data';
import { Filters } from '../../models/filters';

export interface MealsState {
    meals: Meal[],
    filteredMeals: Meal[],
    favoriteMeals: Meal[],
    filters: Filters
}

const initialState: MealsState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    filters: {
        isGlutenFree: false,
        isLactoseFree: false,
        isVegan: false,
        isVegetarian: false
    }
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

const onSetFilters = (state: MealsState, action: SetFiltersAction): MealsState => {
    const filteredMeals: Meal[] = state.meals.filter(meal => {
        if (action.filters.isGlutenFree && !meal.isGlutenFree) {
            return false;
        }

        if (action.filters.isLactoseFree && !meal.isLactoseFree) {
            return false;
        }

        if (action.filters.isVegetarian && !meal.isVegetarian) {
            return false;
        }

        if (action.filters.isVegan && !meal.isVegan) {
            return false;
        }

        return true;
    });

    return {
        ...state,
        filteredMeals: filteredMeals,
        filters: action.filters
    };
};

const MealsReducer = (state: MealsState = initialState, action: MealsAction) => {
    switch (action.type) {
        case MealsActionType.TOGGLE_FAVORITE:
            return onToggleFavorite(state, action as ToggleFavoriteMealAction);
        case MealsActionType.SET_FILTERS:
            return onSetFilters(state, action as SetFiltersAction);
        default:
            return state;
    }
};

export default MealsReducer;