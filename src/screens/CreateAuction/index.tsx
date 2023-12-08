import React, {useState} from 'react';
import {Container, Wrapper} from './styles';

// hooks
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

// components
import Input from '@components/Form/Input';
import {PrimaryButton} from '@components/Button';

//schemas
import {createAuctionSchema} from '@schemas/createAuction';

// Mask
import {Masks} from 'react-native-mask-input';

export default function CreateAuction() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(createAuctionSchema),
  });

  const handleCreateAuction = (data: any) => {
    // Lógica para criar o anúncio de carro
    console.log('Anúncio de carro criado!');
  };

  return (
    <Wrapper>
      <Container>
        <Input
          placeholder="Digite o nome do carro"
          control={control}
          name="name"
          defaultValue=""
          label="Nome"
          errors={errors}
        />

        <Input
          placeholder="Qual a marca do carro?"
          control={control}
          name="brand"
          defaultValue=""
          label="Marca"
          errors={errors}
        />

        <Input
          placeholder="Qual o modelo do carro?"
          control={control}
          name="model"
          defaultValue=""
          label="Modelo"
          errors={errors}
        />

        <Input
          placeholder="Qual a cidade está o seu carro?"
          control={control}
          name="city"
          defaultValue=""
          label="Cidade"
          errors={errors}
        />

        <Input
          placeholder="Qual valor você quer no seu carro?"
          control={control}
          name="price"
          defaultValue=""
          label="Preço"
          errors={errors}
          mask={Masks.BRL_CURRENCY}
        />

        <Input
          placeholder="Qual o ano do seu carro"
          control={control}
          name="year"
          defaultValue=""
          label="Ano"
          errors={errors}
          type="number"
        />

        <Input
          placeholder="Qual o combustível do seu carro?"
          control={control}
          name="fuel"
          defaultValue=""
          label="Combustível"
          errors={errors}
        />

        <Input
          placeholder="Qual o câmbio do seu carro?"
          control={control}
          name="gear"
          defaultValue=""
          label="Câmbio"
          errors={errors}
        />

        <Input
          placeholder="Qual A kilometragem do seu carro?"
          control={control}
          name="mileage"
          defaultValue=""
          label="Kilometragem"
          errors={errors}
        />

        <PrimaryButton
          title="Criar anúncio"
          onPress={handleSubmit(handleCreateAuction)}
        />
      </Container>
    </Wrapper>
  );
}
