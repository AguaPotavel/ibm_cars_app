import styled from 'styled-components/native';

export const TextFilter = styled.TextInput`
  width: 100%;
  height: 60px;
  background-color: ${({theme}) => theme.colors.base[200]};
  border-radius: ${({theme}) => theme.borderRadius[3]};
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing.px[4]};
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[500]};
  color: ${({theme}) => theme.colors.base[900]};
  border: 2px solid ${({theme}) => theme.colors.base[300]};
`;
