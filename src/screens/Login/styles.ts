import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base[100]};
  padding: ${({theme}) => theme.spacing.px[4]};
  justify-content: space-between;
`;

export const SVGWrapper = styled.View`
  padding: ${({theme}) => theme.spacing.px[4]};
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.View`
  flex: 1;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.px[4]};
  align-items: center;
`;

export const LoginTextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${({theme}) => theme.spacing.px[4]};
`;

export const LoginText = styled.Text`
  font-weight: ${({theme}) => theme.font.weight[700]};
  font-size: ${({theme}) => theme.spacing.px[5]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const ButtonWrapper = styled.View`
  padding-top: ${({theme}) => theme.spacing.px[4]};
  justify-content: flex-end;
  align-items: center;
`;
