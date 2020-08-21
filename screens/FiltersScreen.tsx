import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch/FilterSwitch';
import { NavigationDrawerProp } from 'react-navigation-drawer/src/types';

interface Filters {
    isGlutenFree: boolean,
    isLactoseFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean
}

const FiltersScreen = (props: NavigationDrawerScreenProps) => {

    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters: Filters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        };

        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        props.navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={ styles.screen }>
            <FilterSwitch label="Gluten-free"
                          value={ isGlutenFree }
                          onValueChange={ (newValue) => setGlutenFree(newValue) }
            />
            <FilterSwitch label="Lactose-free"
                          value={ isLactoseFree }
                          onValueChange={ (newValue) => setLactoseFree(newValue) }
            />
            <FilterSwitch label="Vegan"
                          value={ isVegan }
                          onValueChange={ (newValue) => setVegan(newValue) }
            />
            <FilterSwitch label="Vegetarian"
                          value={ isVegetarian }
                          onValueChange={ (newValue) => setVegetarian(newValue) }
            />
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
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Save' iconName='ios-save'
                          onPress={ navigationData.navigation.getParam('save') }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
}

export default FiltersScreen;