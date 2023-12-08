import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Wrapper = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  margin-bottom: ${({theme}) => theme.spacing.px[15]};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacing.px[4]};
`;

export const Section = styled.View<{end?: boolean}>`
  flex: 1;
  align-items: ${({end}) => (end ? 'flex-end' : 'flex-start')};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacing.px[1]};
`;

export const PicturesSlider = styled.View`
  height: 250px;
  width: 100%;

  border-bottom-width: ${({theme}) => theme.spacing.px[1]};
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.primary[500]};
`;

export const Slider = styled.FlatList`
  height: 100%;
  width: 100%;
`;

export const SliderImageWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: ${({theme}) => theme.dimensions.width}px;
`;

export const SliderImage = styled.Image`
  width: 100%;
  height: 250px;

  resize-mode: cover;
`;

export const ActionArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: ${({theme}) => theme.spacing.px[4]};
  position: absolute;
  bottom: 0;
`;

export const CarName = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[7]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const CarPrice = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[5]};
  color: ${({theme}) => theme.colors.primary[500]};
  font-weight: ${({theme}) => theme.font.weight[700]};

  margin-right: ${({theme}) => theme.spacing.px[1]};
`;

export const IconMap = styled(Icon).attrs({
  size: 20,
})`
  margin-right: ${({theme}) => theme.spacing.px[1]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const CarCity = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[2]};
  color: ${({theme}) => theme.colors.base[600]};
`;

export const CarInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: ${({theme}) => theme.spacing.px[4]};
  padding-bottom: ${({theme}) => theme.spacing.px[4]};
  gap: ${({theme}) => theme.spacing.px[2]};
`;

export const CarInfoCard = styled.View`
  background-color: ${({theme}) => theme.colors.base[300]};
  padding: ${({theme}) => theme.spacing.px[4]};
  border-radius: ${({theme}) => theme.spacing.px[2]};

  flex-direction: column;
  width: 120px;
  justify-content: space-between;
`;

export const CarInfoTitle = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  color: ${({theme}) => theme.colors.base[600]};
`;

export const CarInfo = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[2]};
  color: ${({theme}) => theme.colors.base[900]};
`;
