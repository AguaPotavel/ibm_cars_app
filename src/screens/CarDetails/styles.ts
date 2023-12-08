import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const PicturesSlider = styled.View`
  height: 250px;
  width: 100%;
`;

export const Slider = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  height: 250px;
  width: 100%;
  background-color: red;
`;

export const SliderImage = styled.Image`
  height: 250px;
  width: 100%;
  resize-mode: cover;
`;
