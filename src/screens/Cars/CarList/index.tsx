import React from 'react';
import {
  CarsList,
  CarItem,
  CarListRow,
  Wrapper,
  CarItemImage,
  CarItemImageWrapper,
  CarItemFooter,
  CarItemPrice,
  CarItemName,
  CarItemYear,
  ViewContainer,
  TextNoCars,
} from './styles';

// types
import type {CarProps} from '@models/Cars';
import type {StackNavigationProp} from '@react-navigation/stack';

// components
import Loading from '@components/Loading';

// utils
import {Masks, formatWithMask} from 'react-native-mask-input';

export type CarItemProps = {
  id: number;
  items: CarProps[];
};

const RenderRow = ({
  item,
  action,
}: {
  item: CarItemProps;
  action: (car: CarProps) => void;
}) => {
  return (
    <CarListRow>
      {item.items.map((car, index) => (
        <RenderItem item={car} key={index} action={action} />
      ))}
    </CarListRow>
  );
};

const RenderItem = ({
  item,
  action,
}: {
  item: CarProps;
  action: (car: CarProps) => void;
}) => {
  return (
    <CarItem activeOpacity={0.8} onPress={() => action(item)}>
      <CarItemImageWrapper>
        <CarItemImage source={{uri: item.thumbnail}} />
      </CarItemImageWrapper>
      <CarItemFooter>
        <CarItemPrice>
          {
            formatWithMask({
              text: item.price.toString(),
              mask: Masks.BRL_CURRENCY,
            }).masked as string
          }
        </CarItemPrice>
        <CarItemName>{item.name}</CarItemName>
        <CarItemYear>{item.year}</CarItemYear>
      </CarItemFooter>
    </CarItem>
  );
};

export default function CarsListComponent({
  cars,
  isFetching,
  navigation,
}: {
  cars: CarProps[];
  isFetching: boolean;
  navigation: StackNavigationProp<any>;
}) {
  const getItemCount = (data: CarProps[]) => Math.ceil(data.length / 2);
  const getItem = (data: CarProps[], index: number) => {
    const items = data.slice(index * 2, index * 2 + 2);
    return {
      id: index,
      items,
    };
  };

  const handleCarDetails = (car: CarProps) => {
    navigation.navigate('Details', {car});
  };

  return (
    <Wrapper>
      {isFetching && (
        <ViewContainer>
          <Loading />
        </ViewContainer>
      )}

      {!isFetching && cars.length === 0 && (
        <ViewContainer>
          <TextNoCars>Nenhum carro encontrado</TextNoCars>
        </ViewContainer>
      )}

      {!isFetching && cars.length > 0 && (
        <CarsList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <RenderRow item={item} action={handleCarDetails} />
          )}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
    </Wrapper>
  );
}
