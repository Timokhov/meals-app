import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import { Category } from '../../models/category';

interface CategoryItemProps {
    category: Category,
    onSelect: () => void
}

const CategoryItem = (props: CategoryItemProps) => {
    return (
        <View style={ styles.categoryItem }>
            <TouchableNativeFeedback style={ styles.touchable } onPress={ props.onSelect }>
                <View style={{ ...styles.container, ...{ backgroundColor: props.category.color } }}>
                    <Text style={ styles.title } numberOfLines={ 2 }>
                        { props.category.title }
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10
    },
    touchable: {
        flex: 1
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textAlign: 'right'
    }
});

export default CategoryItem;