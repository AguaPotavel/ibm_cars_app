import React from 'react';
import {Wrapper, Label} from './styles';
import {useTheme} from 'styled-components';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
};

export default function Button({title, onPress, disabled, type}: ButtonProps) {
  const theme = useTheme();
  const handlePress = () => {
    if (disabled) {
      return;
    }

    onPress();
  };

  return (
    <Wrapper
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      type={type}>
      <Label color={theme.colors.base[100]}>{title}</Label>
    </Wrapper>
  );
}
