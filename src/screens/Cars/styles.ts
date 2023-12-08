import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base[200]};
`;

export const Header = styled.View`
  width: 100%;
  height: fit-content;
  padding: ${({theme}) => theme.spacing.px[4]};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[9]};
  font-weight: ${({theme}) => theme.font.weight[700]};
  color: ${({theme}) => theme.colors.primary[600]};
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[400]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const ActionArea = styled.View`
  max-width: ${({theme}) => theme.dimensions.width}px;
  height: fit-content;
  flex-direction: row;
  padding: ${({theme}) => theme.spacing.px[4]};
  gap: ${({theme}) => theme.spacing.px[1]};
`;

export const SearchArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({theme}) => theme.colors.base[200]};
`;

export const CreateNewAuction = styled.View`
  width: ${({theme}) => theme.spacing.px[15]};
`;
