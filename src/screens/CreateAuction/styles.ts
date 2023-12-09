import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  gap: ${({theme}) => theme.spacing.px[4]};
  padding: ${({theme}) => theme.spacing.px[4]};
`;

export const FormSlider = styled.FlatList`
  height: 100%;
  width: 100%;
`;

export const FormSliderItem = styled.ScrollView`
  flex: 1;
  height: 100%;
  width: ${({theme}) => theme.dimensions.width - theme.spacing.number[8]}px;
  margin-right: ${({theme}) => theme.spacing.px[4]};
  gap: ${({theme}) => theme.spacing.px[8]};
  /* background-color: red; */
`;

export const FormActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${({theme}) => theme.spacing.px[4]} 0;
  gap: ${({theme}) => theme.spacing.px[2]};
`;

export const FormActionsButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormSliderTitle = styled.Text`
  font-size: ${({theme}) => theme.font.size[8]};
  font-weight: ${({theme}) => theme.font.weight[600]};
  color: ${({theme}) => theme.colors.primary[500]};
  margin-bottom: ${({theme}) => theme.spacing.px[4]};
`;
