import {COLORS} from '@/mobileTapp/constants';
import React from 'react';
import {Pressable} from 'react-native';
import Text from './Text';

import type {TextProps} from './TextBase';

export enum LINK_VARIANT {
  STANDARD,
  PRIMARY,
  WHITE,
}

const VARIANT_COLOR_MAP: {[key in LINK_VARIANT]: COLORS} = {
  [LINK_VARIANT.STANDARD]: COLORS.GREY500,
  [LINK_VARIANT.PRIMARY]: COLORS.PRIMARY_MAIN,
  [LINK_VARIANT.WHITE]: COLORS.WHITE,
};

type LinkProps = {
  variant?: LINK_VARIANT;
  onPress: () => void;
} & TextProps;

const Link = ({
  children,
  onPress,
  variant = LINK_VARIANT.PRIMARY,
  ...props
}: React.PropsWithChildren<LinkProps>) => (
  <Pressable onPress={onPress}>
    <Text color={VARIANT_COLOR_MAP[variant]} underline {...props}>
      {children}
    </Text>
  </Pressable>
);

export default Link;
