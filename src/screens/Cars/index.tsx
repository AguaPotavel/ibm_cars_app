import React, {useEffect, useState} from 'react';

//styles
import {
  Wrapper,
  Header,
  Title,
  Subtitle,
  ActionArea,
  CreateNewAuction,
  SearchArea,
} from './styles';

//components
import {PrimaryButton} from '@components/Button';
import Search from '@components/Search';
import CarsListComponent from './CarList';

//types
import type {CarProps} from '@models/Cars';
import type {StackNavigationProp} from '@react-navigation/stack';

//services
import {getCars} from '@services/Cars';

export default function App({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  async function getCarsData(filter?: string) {
    setIsFetching(true);
    const carsData = await getCars({filter});
    setCars(carsData);
    setIsFetching(false);
  }

  useEffect(() => {
    getCarsData();
  }, []);

  function handleSearch(text: string) {
    getCarsData(text);
  }

  return (
    <Wrapper>
      <Header>
        <Title>Bem vindo,</Title>
        <Subtitle>Seu futuro carro está aqui!</Subtitle>
      </Header>

      <ActionArea>
        <SearchArea>
          <Search
            placeholder="Pesquise por Modelo, nome etc"
            onChange={handleSearch}
          />
        </SearchArea>
        <CreateNewAuction>
          <PrimaryButton title="+" onPress={() => {}} />
        </CreateNewAuction>
      </ActionArea>

      <CarsListComponent
        cars={cars}
        isFetching={isFetching}
        navigation={navigation}
      />
    </Wrapper>
  );
}
