import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const InputWrapper = styled(Animated.View)`
  width: 100%;
  height: fit-content;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.px[1]};
`;

export const InputLabel = styled(Animated.Text)`
  font-size: ${({theme}) => theme.font.size[3]};
  color: ${({theme}) => theme.colors.base[1000]};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${({theme}) => theme.spacing.px[14]};
  font-size: ${({theme}) => theme.font.size[2]};
  color: ${({theme}) => theme.colors.base[1000]};
  background-color: ${({theme}) => theme.colors.base[400]};
  padding: ${({theme}) => theme.spacing.px[3]};
  border-radius: ${({theme}) => theme.borderRadius[3]};
`;

export const InputError = styled.Text`
  font-size: ${({theme}) => theme.font.size[1]};
  color: ${({theme}) => theme.colors.support.alert};
`;
