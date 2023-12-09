import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  gap: ${({theme}) => theme.spacing.px[4]};
`;

export const ImagesWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.px[4]};
`;

export const ImageWrapper = styled.View`
  width: ${({theme}) =>
    theme.dimensions.width / 3.5 - theme.spacing.number[4]}px;
  height: ${({theme}) =>
    theme.dimensions.width / 3 - theme.spacing.number[4]}px;
  border-radius: ${({theme}) => theme.borderRadius[3]};
  overflow: hidden;
`;

export const ImageDeleteButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.px[2]};
  background-color: ${({theme}) => theme.colors.primary[500]};
  width: 100%;
  opacity: 0.6;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InputError = styled.Text`
  font-size: ${({theme}) => theme.font.size[1]};
  color: ${({theme}) => theme.colors.support.alert};
`;
