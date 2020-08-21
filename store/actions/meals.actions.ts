import { Action } from 'redux';
import { Meal } from '../../models/meal';

export enum MealsActionType {
    TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
}

export interface MealsAction extends Action<MealsActionType> {}

export interface ToggleFavoriteMealAction extends MealsAction {
    mealId: string
}

export const toggleFavorite = (mealId: string): ToggleFavoriteMealAction => {
    return {
        type: MealsActionType.TOGGLE_FAVORITE,
        mealId: mealId
    }
}