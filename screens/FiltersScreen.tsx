import React, { useState, useEffect, useCallback, Dispatch } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch/FilterSwitch';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { NavigationEventSubscription } from 'react-navigation';
import { Filters } from '../models/filters';
import * as MealsActions from '../store/actions/meals.actions';

const FiltersScreen = (props: NavigationDrawerScreenProps) => {

    const filtersState: Filters = useSelector(
        (state: RootState) => state.mealsState.filters
    );

    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const setFiltersFromState = useCallback(() => {
        setGlutenFree(filtersState.isGlutenFree);
        setLactoseFree(filtersState.isLactoseFree);
        setVegan(filtersState.isVegan);
        setVegetarian(filtersState.isVegetarian);
        props.navigation.setParams({
            isFiltersChanged: false
        });
    }, [filtersState]);

    useEffect(() => {
        setFiltersFromState();
        const willFocusSubscription: NavigationEventSubscription = props.navigation
            .addListener(
                'willFocus',
                setFiltersFromState
            );

        return () => {
            willFocusSubscription.remove();
        }
    }, [setFiltersFromState]);

    useEffect(() => {
        const isFiltersChanged: boolean = filtersState.isGlutenFree !== isGlutenFree
            || filtersState.isLactoseFree !== isLactoseFree
            || filtersState.isVegan !== isVegan
            || filtersState.isVegetarian !== isVegetarian;

        props.navigation.setParams({
            isFiltersChanged: isFiltersChanged
        });
    }, [filtersState, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);


    const dispatch: Dispatch<Action> = useDispatch();
    const saveFilters = useCallback(() => {
        const appliedFilters: Filters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        };

        dispatch(MealsActions.setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        props.navigation.setParams({
            saveFilters: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={ styles.screen }>
            <FilterSwitch label="Gluten-free"
                          value={ isGlutenFree }
                          onValueChange={ (newValue) => setGlutenFree(newValue) }/>
            <FilterSwitch label="Lactose-free"
                          value={ isLactoseFree }
                          onValueChange={ (newValue) => setLactoseFree(newValue) }/>
            <FilterSwitch label="Vegan"
                          value={ isVegan }
                          onValueChange={ (newValue) => setVegan(newValue) }/>
            <FilterSwitch label="Vegetarian"
                          value={ isVegetarian }
                          onValueChange={ (newValue) => setVegetarian(newValue) }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

FiltersScreen.navigationOptions = (navigationData: NavigationDrawerScreenProps) => {
    const saveFilters = navigationData.navigation.getParam('saveFilters');
    const isFiltersChanged: boolean = navigationData.navigation.getParam('isFiltersChanged');
    return {
        headerTitle: 'Filters',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Menu' iconName='ios-menu'
                          onPress={ () => navigationData.navigation.toggleDrawer() }/>
                </HeaderButtons>
            );
        },
        headerRight: () => {
            if (isFiltersChanged) {
                return (
                    <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                        <Item title='Save' iconName='ios-save'
                              onPress={ saveFilters }/>
                    </HeaderButtons>
                );
            } else {
                return '';
            }
        }
    } as NavigationStackOptions
};

export default FiltersScreen;