import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import CategoriesScreen from './CategoriesScreen';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

const FiltersScreen = () => {

    return (
        <View style={ styles.screen }>
            <Text>FilterScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
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
        }
    } as NavigationStackOptions
}

export default FiltersScreen;