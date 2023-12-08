import React from 'react';

// Masked Input
import {formatWithMask} from 'react-native-mask-input';
import type {Mask} from 'react-native-mask-input';

// hooks
import {Controller} from 'react-hook-form';
import type {FieldErrors, FieldValues} from 'react-hook-form';

// styles
import {InputWrapper, InputLabel, Input, InputError} from './styles';

type InputProps = {
  placeholder: string;
  control: any;
  name: string;
  defaultValue?: string;
  label?: string;
  errors?: FieldErrors<FieldValues>;
  type?: string;
  mask?: Mask;
};

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
    let t = text;
    if (!mask) {
      return type === 'number' ? t.replace(/\D/g, '') : t;
    }

    return formatWithMask({text: text, mask: mask}).masked;
  };

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>

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
