import React from 'react';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <LottieView
      source={require('./animation.json')}
      autoPlay
      loop
      style={{width: 200, height: 200}}
    />
  );
}
