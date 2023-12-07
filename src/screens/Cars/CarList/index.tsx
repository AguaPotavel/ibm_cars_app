import React from 'react';
import {Text} from 'react-native';
import {
  CarsList,
  CarItem,
  CarListRow,
  Wrapper,
  CarItemHeader,
  CarItemBrand,
  CarItemModel,
  CarItemYear,
  CarItemBody,
  CarItemImage,
  CarItemImageWrapper,
  CarItemFooter,
  CarItemPrice,
  CarItemFavorite,
} from './styles';

//types
import type {CarProps} from '@types/Cars';

//components
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <CarItem>
      <CarItemHeader>
        <CarItemBrand>{item.brand}</CarItemBrand>
        <CarItemModel>{item.model}</CarItemModel>
      </CarItemHeader>
      <CarItemYear>{item.year}</CarItemYear>
      <CarItemBody>
        <CarItemImageWrapper>
          <CarItemImage
            source={{uri: item.thumbnail}}
            onLoad={() => <Text>Carregando</Text>}
          />
        </CarItemImageWrapper>
      </CarItemBody>
      <CarItemFooter>
        <CarItemPrice>R$ {item.price}</CarItemPrice>
        <CarItemFavorite />
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
  const getItem = (data: CarProps[], index: number) => ({
    id: index,
    items: [data[index * 2], data[index * 2 + 1]],
  });

  return (
    <Wrapper>
      {isFetching && <Text>Carregando...</Text>}

      {!isFetching && cars.length === 0 && <Text>Nenhum carro encontrado</Text>}

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
