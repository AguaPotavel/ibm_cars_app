import React from 'react';
import {Wrapper, Dot} from './styles';

export function SliderIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <Wrapper>
      {Array.from(Array(total).keys()).map((_, index) => (
        <Dot key={index} isActive={index === current} />
      ))}
    </Wrapper>
  );
}
