import {CarProps} from '@types/Cars';
import {VirtualizedListProps} from 'react-native';
import styled from 'styled-components/native';
import type {CarItemProps} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacing.px[2]};
`;

export const CarsList = styled.VirtualizedList<
  VirtualizedListProps<CarItemProps>
>`
  flex: 1;
  padding: ${({theme}) => theme.spacing.px[2]};
  gap: ${({theme}) => theme.spacing.px[4]};
`;

export const CarListRow = styled.View`
  width: 100%;
  height: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.px[2]};
  margin-bottom: ${({theme}) => theme.spacing.px[2]};
  margin-top: ${({theme}) => theme.spacing.px[2]};
`;

export const CarItem = styled.TouchableOpacity.attrs<any>({
  elevation: 2,
  shadowColor: '#262626',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
})`
  width: 48%;
  height: 300px;
  padding: ${({theme}) => theme.spacing.px[4]};
  background-color: ${({theme}) => theme.colors.base[200]};
  border-radius: ${({theme}) => theme.spacing.px[4]};
  margin-bottom: ${({theme}) => theme.spacing.px[2]};
  border: 1px solid ${({theme}) => theme.colors.base[300]};
  /* position: relative; */
`;

export const CarItemHeader = styled.View`
  height: ${({theme}) => theme.spacing.px[8]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarItemBrand = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[700]};
  color: ${({theme}) => theme.colors.primary[700]};
`;

export const CarItemModel = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[400]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const CarItemYear = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[2]};
  font-weight: ${({theme}) => theme.font.weight[100]};
  color: ${({theme}) => theme.colors.base[600]};
  margin-bottom: ${({theme}) => theme.spacing.px[2]};
`;

export const CarItemBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CarItemImageWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: ${({theme}) => theme.spacing.px[4]};
  overflow: hidden;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const CarItemImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const CarItemFooter = styled.View`
  height: ${({theme}) => theme.spacing.px[8]};
  margin-top: ${({theme}) => theme.spacing.px[2]};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
`;

export const CarItemPrice = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[700]};
  color: ${({theme}) => theme.colors.primary[700]};
`;

export const CarItemFavorite = styled(Icon).attrs<any>({
  name: 'chevron-right',
  size: 20,
})`
  color: ${({theme}) => theme.colors.primary[600]};
`;
