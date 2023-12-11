import React, {useState, useEffect} from 'react';

// styles
import {
  Wrapper,
  ImagesWrapper,
  ImageWrapper,
  Image,
  ImageDeleteButton,
  InputError,
} from './styles';

// components
import Button from '@components/Button';

// types
import type {FieldErrors, FieldValues} from 'react-hook-form';

// icons
import Icon from 'react-native-vector-icons/Ionicons';

// utils
import {launchImageLibrary} from 'react-native-image-picker';

export type ImagePickerProps = {
  name: string;
  setValue: (name: string, value: any) => void;
  errors?: FieldErrors<FieldValues>;
};

/**
 * @param {ImagePickerProps} props - ImagePicker props
 * @param {string} props.name - ImagePicker name
 * @param {(name: string, value: any) => void} props.setValue - ImagePicker setValue function
 * @param {FieldErrors<FieldValues>} [props.errors] - ImagePicker errors
 * @returns {React.ReactElement}
 */
export default function ImagePicker({
  setValue,
  name,
  errors,
}: ImagePickerProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (images.length === 0) return;

    setValue(name, images);
  }, [images]);

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 600,
        maxWidth: 600,
      },
      (response) => {
        if (
          !response.assets ||
          response.assets.length === 0 ||
          response.errorCode ||
          response.didCancel
        ) {
          return;
        }

        const {uri} = response.assets[0];

        if (!uri) {
          return;
        }

        setImages((old) => [...old, uri]);
      }
    );
  };

  return (
    <Wrapper>
      <ImagesWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image source={{uri: image}} />
            <ImageDeleteButton
              onPress={() =>
                setImages((old) => old.filter((_, i) => i !== index))
              }>
              <Icon name="trash-outline" size={24} color="#fff" />
            </ImageDeleteButton>
          </ImageWrapper>
        ))}
      </ImagesWrapper>

      <Button title="Selecionar Imagens" onPress={handleSelectImage} />

      {errors && errors[name] && (
        <InputError>{errors[name]?.message as string}</InputError>
      )}
    </Wrapper>
  );
}
