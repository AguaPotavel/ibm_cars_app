import styled from 'styled-components/native';

type labelProps = {
  color: string;
};

type ButtonProps = {
  type?: 'primary' | 'secondary';
};

export const Wrapper = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 60px;
  background-color: ${({theme, type}) =>
    type === 'primary' ? theme.colors.primary[500] : theme.colors.base[700]};
  border-radius: ${({theme}) => theme.borderRadius[3]};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<labelProps>`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[4]};
  font-weight: ${({theme}) => theme.font.weight[500]};
  color: ${({color}) => color};
`;
