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
  Section,
  Row,
  IconMap,
  CarCity,
  ScrollView,
  CarInfoWrapper,
  CarInfoCard,
  CarInfoTitle,
  CarInfo,
  CarPrice,
} from './styles';

// hooks
import {useTheme} from 'styled-components/native';

// types
import {CarProps} from '@models/Cars';

// components
import Button from '@components/Button';
import {SliderIndicator} from './SlideIndicator';

// utils
import {Masks, formatWithMask} from 'react-native-mask-input';
import {Toast} from 'toastify-react-native';

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
          <Row>
            <Section>
              <CarName>{car.name}</CarName>
              <Row>
                <IconMap name="map-pin" />
                <CarCity>{car.city}</CarCity>
              </Row>
            </Section>

            <Section end>
              <CarPrice>
                {
                  formatWithMask({
                    text: car.price.toString(),
                    mask: Masks.BRL_CURRENCY,
                  }).masked as string
                }
              </CarPrice>
            </Section>
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
        <Button
          title="Entrar em contato"
          onPress={() => {
            Toast.success('O Vendedor foi notificado do seu interesse!');
          }}
          type="primary"
        />
      </ActionArea>
    </Wrapper>
  );
}
