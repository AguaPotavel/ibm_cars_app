import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.px[2]};
  position: absolute;
  bottom: ${({theme}) => theme.spacing.px[4]};
`;

export const Dot = styled.View<{isActive: boolean}>`
  width: ${({theme}) => theme.spacing.px[2]};
  height: ${({theme}) => theme.spacing.px[2]};
  border-radius: ${({theme}) => theme.spacing.px[1]};
  background-color: ${({theme, isActive}) =>
    isActive ? theme.colors.primary[500] : theme.colors.base[400]};
`;
