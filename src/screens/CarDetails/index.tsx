import React from 'react';
import {Text} from 'react-native';
import {Wrapper, PicturesSlider, Slider, SliderImage} from './styles';
import {CarProps} from '@models/Cars';

const renderImage = ({item}: any) => {
  console.log(item);
  return <SliderImage source={{uri: item.image}} />;
};

export default function CarDetails({route}: {route: any}) {
  const {car} = route.params as {car: CarProps};

  const getSliderImages = () => {
    return car.photos.map((photo, index) => ({
      image: photo,
      key: index,
    }));
  };

  return (
    <Wrapper>
      <PicturesSlider>
        <Slider data={getSliderImages()} renderItem={renderImage} />
      </PicturesSlider>
      <Text>CarDetails</Text>
    </Wrapper>
  );
}
