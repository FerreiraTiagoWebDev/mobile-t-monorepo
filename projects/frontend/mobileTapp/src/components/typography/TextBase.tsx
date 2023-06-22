import {COLORS, TEXT_ALIGN} from '@/mobileTapp/constants';
import React from 'react';
import styled from 'styled-components/native';

interface TextBaseProps {
  color?: COLORS;
  fontSize: number;
  lineHeight: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  underline?: boolean;
  align?: TEXT_ALIGN;
  isBold?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
}

export type TextProps = Omit<TextBaseProps, 'fontSize' | 'lineHeight'>;

const TEXT_ALIGN_TEXT_MAP: {[key in TEXT_ALIGN]: string} = {
  [TEXT_ALIGN.LEFT]: 'left',
  [TEXT_ALIGN.CENTER]: 'center',
  [TEXT_ALIGN.RIGHT]: 'right',
};

const TEXT_ALIGN_FLEX_MAP: {[key in TEXT_ALIGN]: string} = {
  [TEXT_ALIGN.LEFT]: 'flex-start',
  [TEXT_ALIGN.CENTER]: 'center',
  [TEXT_ALIGN.RIGHT]: 'flex-end',
};

const StyledView = styled.View`
  width: 100%;
  justify-content: space-between;
`;

const StyledText = styled.Text<TextBaseProps>`
  color: ${props => props.color ?? props.theme.palette.black};
  font-size: ${({fontSize}) => fontSize}px;
  line-height: ${({lineHeight}) => lineHeight}px;
  text-decoration: ${({underline}) => (underline ? 'underline' : '')};
  text-decoration-color: ${({theme, color}) => color ?? theme.palette.black};
  margin-top: ${({marginTop}) => (marginTop ? `${marginTop}px` : '0')};
  margin-right: ${({marginRight}) => (marginRight ? `${marginRight}px` : '0')};
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? `${marginBottom}px` : '0'};
  margin-left: ${({marginLeft}) => (marginLeft ? `${marginLeft}px` : '0')}
  text-align: ${({align}) => TEXT_ALIGN_TEXT_MAP[align ?? TEXT_ALIGN.LEFT]};
  align-self: ${({align}) => TEXT_ALIGN_FLEX_MAP[align ?? TEXT_ALIGN.LEFT]};
  text-transform: ${({uppercase, capitalize}) =>
    uppercase ? 'uppercase' : capitalize ? 'capitalize' : 'none'};
  font-family: ${props =>
    props.isBold
      ? props.theme.font.fontFamily.bold
      : props.theme.font.fontFamily.regular};
`;

const TextBase = ({
  children,
  ...props
}: React.PropsWithChildren<TextBaseProps>) => (
  <StyledView>
    <StyledText {...props}>{children}</StyledText>
  </StyledView>
);

export default TextBase;
