// tslint:disable-next-line: no-implicit-dependencies
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

//components
import Input from '@components/Form/Input';
import {PrimaryButton} from '@components/Button';

//hooks
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import useAuth from '@hooks/useAuth';

//schemas
import {loginSchema} from '@schemas/login';

//styles
import {Wrapper} from './styles';

export default function App() {
  const {setLogged} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    setLogged(true);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Wrapper>
      <Text>Login</Text>

      <Input
        placeholder="Digite seu email"
        control={control}
        name="email"
        defaultValue=""
        label="Email"
        errors={errors}
      />

      <Input
        placeholder="Digite sua senha"
        control={control}
        name="password"
        defaultValue=""
        label="Senha"
        errors={errors}
        type="password"
      />

      <PrimaryButton title="Entrar" onPress={handleSubmit(onSubmit)} />
    </Wrapper>
  );
}
