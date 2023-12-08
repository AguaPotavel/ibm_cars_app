import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  gap: ${({theme}) => theme.spacing.px[4]};
  padding: ${({theme}) => theme.spacing.px[4]};
`;
