import { Action } from 'redux';
import { Filters } from '../../models/filters';

export enum MealsActionType {
    TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
    SET_FILTERS = 'SET_FILTERS'
}

export interface MealsAction extends Action<MealsActionType> {}

export interface ToggleFavoriteMealAction extends MealsAction {
    mealId: string
}

export interface SetFiltersAction extends MealsAction {
    filters: Filters
}

export const toggleFavorite = (mealId: string): ToggleFavoriteMealAction => {
    return {
        type: MealsActionType.TOGGLE_FAVORITE,
        mealId: mealId
    };
};

export const setFilters = (filters: Filters): SetFiltersAction => {
    return {
        type: MealsActionType.SET_FILTERS,
        filters: filters
    };
};