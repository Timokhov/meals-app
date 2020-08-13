import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const CategoriesScreen = (props: NavigationStackScreenProps) => {

    const navigate = () => {
        props.navigation.navigate({ routeName: 'Meals' });
    }

    return (
        <View style={ styles.screen }>
            <Text>CategoriesScreen</Text>
            <Button title="Go to Meals" onPress={ navigate }/>
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

export default CategoriesScreen;