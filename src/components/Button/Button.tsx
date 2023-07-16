import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
