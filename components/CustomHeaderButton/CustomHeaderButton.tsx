import React from 'react';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import { Ionicons } from 'expo-vector-icons';
import { colors } from '../../constants/colors';
import { Platform } from 'react-native';

const CustomHeaderButton = (props: HeaderButtonProps) => {
    return <HeaderButton { ...props }
                         IconComponent={ Ionicons }
                         iconSize={ 23 }
                         color={ Platform.OS === 'android' ? 'white' : colors.primaryColor }
    />
};

export default CustomHeaderButton;