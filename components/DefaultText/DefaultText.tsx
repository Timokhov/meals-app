import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface DefaultTextProps {
    children: React.ReactNode,
    style?: TextStyle
}

const DefaultText = (props: DefaultTextProps) => {
    return (
        <Text style={{ ...props.style, ...styles.defaultText }}>{ props.children }</Text>
    );
};

const styles = StyleSheet.create({
   defaultText: {
       fontFamily: 'open-sans'
   }
});

export default DefaultText;

