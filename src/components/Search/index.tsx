import React, {useRef} from 'react';
import {TextFilter} from './styles';

type Props = {
  placeholder: string;
  onChange: (value: string) => void;
};

/**
 * @param {Props} props - Search props
 * @param {string} props.placeholder - Search placeholder
 * @param {(value: string) => void} props.onChange - Search onChange function
 * @returns {React.ReactElement}
 */
export default function Search({placeholder, onChange}: Props) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(text: string) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => onChange(text), 500);
  }

  return (
    <TextFilter
      onChangeText={(text) => handleChange(text)}
      placeholder={placeholder}
    />
  );
}
