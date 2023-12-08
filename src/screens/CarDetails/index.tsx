import React, {useState} from 'react';

// styles
import {
  Wrapper,
  PicturesSlider,
  Slider,
  SliderImage,
  SliderImageWrapper,
  CarName,
  ActionArea,
  Content,
  Row,
  IconMap,
  CarCity,
  ScrollView,
  CarInfoWrapper,
  CarInfoCard,
  CarInfoTitle,
  CarInfo,
} from './styles';
import {useTheme} from 'styled-components/native';

// models
import {CarProps} from '@models/Cars';

// components
import {PrimaryButton} from '@components/Button';
import {SliderIndicator} from './SlideIndicator';

const renderImage = ({item}: any) => {
  return (
    <SliderImageWrapper>
      <SliderImage source={{uri: item.image}} />
    </SliderImageWrapper>
  );
};

export default function CarDetails({route}: {route: any}) {
  const {car} = route.params as {car: CarProps};
  const {dimensions} = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const getSliderImages = () => {
    return car.photos.map((photo, index) => ({
      image: photo,
      key: index,
    }));
  };

  return (
    <Wrapper>
      <ScrollView>
        <PicturesSlider>
          <Slider
            data={getSliderImages()}
            renderItem={renderImage}
            keyExtractor={(item) => {
              const {key} = item as {key: number};
              return key.toString();
            }}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={dimensions.width}
            onScroll={(event) => {
              const {contentOffset} = event.nativeEvent;
              setCurrentSlide(Math.round(contentOffset.x / dimensions.width));
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <SliderIndicator current={currentSlide} total={car.photos.length} />
        </PicturesSlider>
        <Content>
          <CarName>{car.name}</CarName>
          <Row>
            <IconMap name="map-pin" />
            <CarCity>{car.city}</CarCity>
          </Row>

          <CarInfoWrapper>
            <CarInfoCard>
              <CarInfoTitle>Marca</CarInfoTitle>
              <CarInfo>{car.brand}</CarInfo>
            </CarInfoCard>

            <CarInfoCard>
              <CarInfoTitle>Ano</CarInfoTitle>
              <CarInfo>{car.year}</CarInfo>
            </CarInfoCard>

            <CarInfoCard>
              <CarInfoTitle>Modelo</CarInfoTitle>
              <CarInfo>{car.model}</CarInfo>
            </CarInfoCard>

            <CarInfoCard>
              <CarInfoTitle>Km's</CarInfoTitle>
              <CarInfo>{car.mileage || 'N/A'}</CarInfo>
            </CarInfoCard>

            <CarInfoCard>
              <CarInfoTitle>Motor</CarInfoTitle>
              <CarInfo>{car.gear || 'N/A'}</CarInfo>
            </CarInfoCard>

            <CarInfoCard>
              <CarInfoTitle>Combústivel</CarInfoTitle>
              <CarInfo>{car.fuel || 'N/A'}</CarInfo>
            </CarInfoCard>
          </CarInfoWrapper>
        </Content>
      </ScrollView>

      <ActionArea>
        <PrimaryButton
          title="Entrar em contato"
          onPress={() => console.log('alugou')}
        />
      </ActionArea>
    </Wrapper>
  );
}
