import React from 'react';
import {useWindowDimensions} from 'react-native';

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
};

const InputForm = ({
  placeholder,
  control,
  name,
  defaultValue,
  label,
  errors,
  type,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
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
