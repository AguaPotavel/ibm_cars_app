import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base[100]};
  padding: ${({theme}) => theme.spacing.px[4]};
  gap: ${({theme}) => theme.spacing.px[4]};
  justify-content: center;
`;
