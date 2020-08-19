import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../DefaultText/DefaultText';

interface ListItemProps {
    children: React.ReactNode
}

const ListItem = (props: ListItemProps) => {
    return (
        <View style={ styles.listItem }>
            <DefaultText>
                { props.children }
            </DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default ListItem;