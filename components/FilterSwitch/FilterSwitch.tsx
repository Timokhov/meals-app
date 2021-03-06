import React from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

interface FilterSwitchProps {
    label: string,
    value: boolean,
    onValueChange: (newValue: boolean) => void
}

const FilterSwitch = (props: FilterSwitchProps) => {

    return (
        <View style={ styles.filterContainer }>
            <Text style={ styles.label }>{ props.label }</Text>
            <Switch value={ props.value }
                    onValueChange={ props.onValueChange }/>
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    label: {
        fontFamily: 'open-sans',
        fontSize: 16
    }
});

export default FilterSwitch;