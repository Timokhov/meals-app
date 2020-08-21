import { combineReducers, createStore, Reducer, CombinedState } from 'redux';
import MealsReducer, { MealsState } from './reducers/meals.reducer';

export interface RootState {
    mealsState: MealsState
}

const rootReducer: Reducer<CombinedState<RootState>> = combineReducers({
    mealsState: MealsReducer
});

export const store = createStore(rootReducer);