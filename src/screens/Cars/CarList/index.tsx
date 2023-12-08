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
import type {CarProps} from '@types/Cars';

// components
import Loading from '@components/Loading';

export type CarItemProps = {
  id: number;
  items: CarProps[];
};

const RenderRow = ({item}: {item: CarItemProps}) => {
  return (
    <CarListRow>
      {item.items.map((car, index) => (
        <RenderItem item={car} key={index} />
      ))}
    </CarListRow>
  );
};

const RenderItem = ({item}: {item: CarProps}) => {
  return (
    <CarItem activeOpacity={0.8}>
      <CarItemImageWrapper>
        <CarItemImage source={{uri: item.thumbnail}} />
      </CarItemImageWrapper>
      <CarItemFooter>
        <CarItemPrice>R$ {item.price}</CarItemPrice>
        <CarItemName>{item.name}</CarItemName>
        <CarItemYear>{item.year}</CarItemYear>
      </CarItemFooter>
    </CarItem>
  );
};

export default function CarsListComponent({
  cars,
  isFetching,
}: {
  cars: CarProps[];
  isFetching: boolean;
}) {
  const getItemCount = (data: CarProps[]) => Math.ceil(data.length / 2);
  const getItem = (data: CarProps[], index: number) => {
    const items = data.slice(index * 2, index * 2 + 2);
    return {
      id: index,
      items,
    };
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
          renderItem={({item}) => <RenderRow item={item} />}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
    </Wrapper>
  );
}
