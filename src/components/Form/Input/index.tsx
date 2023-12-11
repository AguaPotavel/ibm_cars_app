import React, {useRef} from 'react';

// native
import {Animated} from 'react-native';

// Masked Input
import {formatWithMask} from 'react-native-mask-input';
import type {Mask} from 'react-native-mask-input';

// hooks
import {Controller} from 'react-hook-form';
import type {FieldErrors, FieldValues} from 'react-hook-form';

// styles
import {InputWrapper, InputLabel, Input, InputError} from './styles';

export type InputProps = {
  placeholder: string;
  control: any;
  name: string;
  defaultValue?: string;
  label?: string;
  errors?: FieldErrors<FieldValues>;
  type?: string;
  mask?: Mask;
};

/**
 * @param {InputProps} props - Input props
 * @param {string} props.placeholder - Input placeholder
 * @param {any} props.control - Input control
 * @param {string} props.name - Input name
 * @param {string} [props.defaultValue] - Input defaultValue
 * @param {string} [props.label] - Input label
 * @param {FieldErrors<FieldValues>} [props.errors] - Input errors
 * @param {string} [props.type] - Input type
 * @param {Mask} [props.mask] - Input mask
 * @returns {React.ReactElement}
 */

const InputForm = ({
  placeholder,
  control,
  name,
  defaultValue,
  label,
  errors,
  type,
  mask,
}: InputProps) => {
  const onChangeTextWithMask = (text: string) => {
    if (!mask) {
      return type === 'number' ? parseInt(text || '0') : text;
    }

    return formatWithMask({text: text, mask: mask}).masked;
  };

  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const translateYAnimation = useRef(new Animated.Value(-20)).current;

  const animateInput = () => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animateLabel = () => {
    Animated.timing(translateYAnimation, {
      toValue: 0,
      duration: 500,
      delay: 100,
      useNativeDriver: true,
    }).start();
  };

  animateInput();
  animateLabel();

  return (
    <InputWrapper style={{opacity: opacityAnimation}}>
      <InputLabel
        style={{
          transform: [
            {
              translateY: translateYAnimation.interpolate({
                inputRange: [-20, 0],
                outputRange: [-20, 0],
              }),
            },
          ],
        }}>
        {label}
      </InputLabel>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(onChangeTextWithMask(text));
            }}
            value={value}
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            returnKeyType="next"
          />
        )}
        name={name}
        defaultValue={defaultValue || ''}
      />

      {errors && errors[name] && (
        <InputError>{errors[name]?.message as string}</InputError>
      )}
    </InputWrapper>
  );
};

export default InputForm;
