import {VirtualizedListProps} from 'react-native';
import styled from 'styled-components/native';
import type {CarItemProps} from './index';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacing.px[2]};
`;

export const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextNoCars = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[400]};
  color: ${({theme}) => theme.colors.base[900]};
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
  height: 200px;
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
  height: 200px;
  background-color: ${({theme}) => theme.colors.base[200]};
  border-radius: ${({theme}) => theme.spacing.px[4]};
  margin-bottom: ${({theme}) => theme.spacing.px[2]};
  border: 1px solid ${({theme}) => theme.colors.base[300]};
  overflow: hidden;
`;

export const CarItemName = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[400]};
  color: ${({theme}) => theme.colors.base[900]};
`;

export const CarItemYear = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[1]};
  font-weight: ${({theme}) => theme.font.weight[400]};
  color: ${({theme}) => theme.colors.base[600]};
`;

export const CarItemImageWrapper = styled.View`
  flex: 2;
  width: 100%;
  border-radius: ${({theme}) => theme.spacing.px[4]};
  justify-content: center;
  align-items: center;
`;

export const CarItemImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const CarItemFooter = styled.View`
  padding: ${({theme}) => theme.spacing.px[2]};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CarItemPrice = styled.Text`
  font-family: ${({theme}) => theme.font.family.primary};
  font-size: ${({theme}) => theme.font.size[3]};
  font-weight: ${({theme}) => theme.font.weight[700]};
  color: ${({theme}) => theme.colors.primary[700]};
`;
