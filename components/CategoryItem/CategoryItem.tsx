import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Category } from '../../models/category';

interface CategoryItemProps {
    category: Category,
    onSelect: () => void
}

const CategoryItem = (props: CategoryItemProps) => {
    return (
        <View style={ styles.categoryItem }>
            <TouchableNativeFeedback style={ styles.touchable } onPress={ props.onSelect }>
                <ImageBackground style={ styles.image }
                                 source={{ uri: props.category.imageUrl }}>
                    <View style={ styles.infoContainer }>
                        <Text style={ styles.title } numberOfLines={ 2 }>
                            { props.category.title }
                        </Text>
                    </View>
                </ImageBackground>
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
        overflow: 'hidden',
        elevation: 5,
    },
    touchable: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    infoContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
});

export default CategoryItem;