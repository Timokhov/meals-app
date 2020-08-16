import React from 'react';
import { FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/category';
import CategoryItem from '../components/CategoryItem/CategoryItem';

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
} as NavigationStackOptions

export default CategoriesScreen;