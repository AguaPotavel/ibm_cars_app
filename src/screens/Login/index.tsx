import React, {useEffect} from 'react';

//components
import Input from '@components/Form/Input';
import Button from '@components/Button';

//hooks
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import useAuth from '@hooks/useAuth';

//schemas
import {loginSchema} from '@schemas/login';

//styles
import {
  Wrapper,
  SVGWrapper,
  LoginTextWrapper,
  LoginText,
  FormWrapper,
  ButtonWrapper,
} from './styles';

//assets
import LogoSVG from './../../../assets/cars.svg';

export default function App() {
  const {setLogged} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = () => {
    setLogged(true);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Wrapper>
      <FormWrapper>
        <SVGWrapper>
          <LogoSVG width={240} />
        </SVGWrapper>
        <LoginTextWrapper>
          <LoginText>Entre com o seu email e senha</LoginText>
        </LoginTextWrapper>

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
      </FormWrapper>

      <ButtonWrapper>
        <Button
          title="Entrar"
          onPress={handleSubmit(onSubmit)}
          type="primary"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
