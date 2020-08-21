import React from 'react';
import { FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/category';
import CategoryItem from '../components/CategoryItem/CategoryItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import { NavigationDrawerScreenProps } from 'react-navigation-drawer';

const CategoriesScreen = (props: NavigationStackScreenProps) => {

    const selectCategory = (category: Category) => {
        props.navigation.navigate({
            routeName: 'Meals',
            params: {
                category: category
            }
        });
    }

    const renderCategoryItem = (itemInfo: ListRenderItemInfo<Category>) => {
        return <CategoryItem category={ itemInfo.item } onSelect={ () => selectCategory(itemInfo.item) }/>;
    }

    return (
        <FlatList numColumns={ 2 }
                  data={ CATEGORIES }
                  renderItem={ renderCategoryItem }
        />
    );
};

const styles = StyleSheet.create({});

CategoriesScreen.navigationOptions = (navigationData: NavigationDrawerScreenProps) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
                    <Item title='Menu' iconName='ios-menu'
                          onPress={ () => navigationData.navigation.toggleDrawer() }/>
                </HeaderButtons>
            );
        }
    } as NavigationStackOptions
};

export default CategoriesScreen;