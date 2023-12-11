import React, {useEffect, useState, useRef} from 'react';
import {
  FormActionsWrapper,
  FormActionsButton,
  Wrapper,
  FormSlider,
  FormSliderItem,
  FormSliderTitle,
} from './styles';

// hooks
import {set, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useTheme} from 'styled-components/native';
import {Toast} from 'toastify-react-native';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button';
import ImagePicker from '@components/Form/ImagePicker';

//schemas
import {createAuctionSchema} from '@schemas/createAuction';

// Mask
import {Masks} from 'react-native-mask-input';

// models
import {FormCreateAuctionProps, FormCreateAuctionItem} from './form';
import {FlatList} from 'react-native';

// navigation
import type {StackNavigationProp} from '@react-navigation/stack';

// CONSTANTS
const SLIDERS_LENGHT = 4;

const RenderItem = ({item}: any) => {
  const {fields, title, isPicker, pickerField} = item;

  return (
    <FormSliderItem>
      <FormSliderTitle>{title}</FormSliderTitle>

      {!isPicker &&
        fields.map((field: any) => (
          <Input
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            mask={field.mask}
            control={field.control}
            errors={field.errors}
          />
        ))}

      {isPicker && (
        <ImagePicker
          setValue={pickerField.setValue}
          name={pickerField.name}
          errors={pickerField.errors}
        />
      )}
    </FormSliderItem>
  );
};

export default function CreateAuction({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const {dimensions} = useTheme();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(createAuctionSchema),
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const FormSliderRef = useRef<FlatList<FormCreateAuctionItem>>(null);

  const handleCreateAuction = (data: any) => {
    console.log(data);
    Toast.success('Anúncio de carro criado!', 'top');
    reset();
    navigation.navigate('Cars');
  };

  useEffect(() => {
    FormSliderRef.current?.scrollToIndex({
      index: currentSlide,
      animated: true,
    });
  }, [currentSlide]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Toast.error('Preencha os campos corretamente!', 'top');
    }

    console.log(errors);
  }, [errors]);

  const Form: FormCreateAuctionProps = {
    items: [
      {
        title: 'Dados do veículo',
        fields: [
          {
            name: 'name',
            label: 'Nome',
            placeholder: 'Digite o nome do carro',
            type: 'text',
            control: control,
            errors: errors,
          },
          {
            name: 'brand',
            label: 'Marca',
            placeholder: 'Qual a marca do carro?',
            type: 'text',
            control: control,
            errors: errors,
          },
          {
            name: 'model',
            label: 'Modelo',
            placeholder: 'Qual o modelo do carro?',
            type: 'text',
            control: control,
            errors: errors,
          },
          {
            name: 'year',
            label: 'Ano',
            placeholder: 'Qual o ano do carro?',
            type: 'number',
            control: control,
            errors: errors,
          },
        ],
      },
      {
        title: 'Dados para compra',
        fields: [
          {
            name: 'price',
            label: 'Preço',
            placeholder: 'Qual valor você quer no seu carro?',
            type: 'text',
            mask: Masks.BRL_CURRENCY,
            control: control,
            errors: errors,
          },
          {
            name: 'city',
            label: 'Cidade',
            placeholder: 'Qual a cidade está o seu carro?',
            type: 'text',
            control: control,
            errors: errors,
          },
        ],
      },
      {
        title: 'Informações opcionais',
        fields: [
          {
            name: 'mileage',
            label: 'Km',
            placeholder: 'Quantos km tem o seu carro?',
            type: 'number',
            control: control,
            errors: errors,
          },
          {
            name: 'gear',
            label: 'Câmbio',
            placeholder: 'Qual o câmbio do seu carro?',
            type: 'text',
            control: control,
            errors: errors,
          },
          {
            name: 'fuel',
            label: 'Combústivel',
            placeholder: 'Qual o combústivel do seu carro?',
            type: 'text',
            control: control,
            errors: errors,
          },
        ],
      },
      {
        title: 'Fotos do veículo',
        fields: [],
        pickerField: {
          name: 'photos',
          setValue: setValue,
          errors: errors,
        },
        isPicker: true,
      },
    ],
    onSubmit: handleCreateAuction,
  };

  const handleNextSlide = () => {
    setCurrentSlide((old) => (old >= SLIDERS_LENGHT - 1 ? old : old + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((old) => (old <= 0 ? old : old - 1));
  };

  return (
    <Wrapper>
      <FormSlider
        ref={FormSliderRef}
        data={Form.items}
        renderItem={RenderItem}
        keyExtractor={(item: any) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        snapToInterval={dimensions.width}
        snapToAlignment="start"
        decelerationRate="fast"
      />

      <FormActionsWrapper>
        {currentSlide > 0 && (
          <FormActionsButton>
            <Button title="Voltar" onPress={handlePrevSlide} />
          </FormActionsButton>
        )}

        <FormActionsButton>
          <Button
            title={currentSlide === SLIDERS_LENGHT - 1 ? 'Criar' : 'Próximo'}
            onPress={
              currentSlide === SLIDERS_LENGHT - 1
                ? handleSubmit(Form.onSubmit)
                : handleNextSlide
            }
            type="primary"
          />
        </FormActionsButton>
      </FormActionsWrapper>
    </Wrapper>
  );
}
