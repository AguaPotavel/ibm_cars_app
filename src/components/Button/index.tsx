import React from 'react';
import {Wrapper, Label} from './styles';
import {useTheme} from 'styled-components';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
};

/**
 * @param {ButtonProps} props - Button props
 * @param {string} props.title - Button title
 * @param {() => void} props.onPress - Button onPress function
 * @param {boolean} [props.disabled] - Button disabled
 * @param {'primary' | 'secondary'} [props.type] - Button type
 * @returns {React.ReactElement}
 */

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
