import {COLORS} from '@/mobileTapp/constants';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

interface LoaderProps {
  align?: ALIGN;
  color?: COLORS;
}

export enum ALIGN {
  TOP,
  CENTER,
  BOTTOM,
}

const ALIGN_MAP: {[key in ALIGN]: string} = {
  [ALIGN.TOP]: 'flex-start',
  [ALIGN.CENTER]: 'center',
  [ALIGN.BOTTOM]: 'flex-end',
};

const StyledView = styled.View<LoaderProps>`
  width: 100%;
  height: 100%;
  justify-content: ${({align}) => ALIGN_MAP[align ?? ALIGN.CENTER]};
  align-items: center;
  margin: 20px 0;
`;

const Loader = ({align, color}: LoaderProps) => (
  <StyledView align={align}>
    <ActivityIndicator color={color ?? COLORS.PRIMARY_MAIN} size="large" />
  </StyledView>
);

export default Loader;
