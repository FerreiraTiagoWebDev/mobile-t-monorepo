import React from 'react'
import styled, { DefaultTheme } from 'styled-components/native'
import { COLORS } from '../constants'
import Loader from './Loader'

export enum BUTTON_VARIANTS {
  BLOCK,
  OUTLINE,
  OUTLINE_LIGHT,
  DELETE,
}

interface ButtonProps {
  variant?: BUTTON_VARIANTS
  margin?: string
  onPress: () => void
  startIcon?: React.ReactElement
  isLoading?: boolean
  disabled?: boolean
}

const VARIANT_BG_COLOR_MAP: {
  [key in BUTTON_VARIANTS]: (theme: DefaultTheme) => string
} = {
  [BUTTON_VARIANTS.BLOCK]: (theme) => theme.palette.primary.main,
  [BUTTON_VARIANTS.OUTLINE]: () => '',
  [BUTTON_VARIANTS.OUTLINE_LIGHT]: () => '',
  [BUTTON_VARIANTS.DELETE]: (theme) => theme.palette.primary.hover,
}

const VARIANT_BORDER_MAP: {
  [key in BUTTON_VARIANTS]: (theme: DefaultTheme) => string
} = {
  [BUTTON_VARIANTS.BLOCK]: () => 'none',
  [BUTTON_VARIANTS.OUTLINE]: (theme) =>
    `2px solid ${theme.palette.primary.main}`,
  [BUTTON_VARIANTS.OUTLINE_LIGHT]: (theme) =>
    `2px solid ${theme.palette.white}`,
  [BUTTON_VARIANTS.DELETE]: () => 'none',
}

const VARIANT_TEXT_COLOR_MAP: {
  [key in BUTTON_VARIANTS]: (theme: DefaultTheme) => string
} = {
  [BUTTON_VARIANTS.BLOCK]: (theme) => theme.palette.white,
  [BUTTON_VARIANTS.OUTLINE]: (theme) => theme.palette.primary.main,
  [BUTTON_VARIANTS.OUTLINE_LIGHT]: (theme) => theme.palette.white,
  [BUTTON_VARIANTS.DELETE]: (theme) => theme.palette.primary.main,
}

const StyledTouchableOpacity = styled.TouchableOpacity<{
  variant: BUTTON_VARIANTS
  margin: string
  disabled: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, theme }) =>
    VARIANT_BG_COLOR_MAP[variant](theme)};
  opacity: ${({ disabled }) => disabled ? '0.2' : '1'};
  border: ${({ variant, theme }) => VARIANT_BORDER_MAP[variant](theme)};
  width: 100%;
  height: 56px;
  border-radius: ${(props) => props.theme.borderRadius};
  margin: ${({ margin }) => margin};
  ${({ variant, theme }) =>
    variant === BUTTON_VARIANTS.BLOCK &&
    `
    shadow-color: ${theme.palette.black};
    shadow-offset: 0px;
    shadow-opacity: 0.27;
    shadow-radius: 4px;
  `}
`

const StyledText = styled.Text<{ variant: BUTTON_VARIANTS }>`
  font-family: ${(props) => props.theme.font.fontFamily.regular};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${({ variant, theme }) => VARIANT_TEXT_COLOR_MAP[variant](theme)};
`
const StyledIcon = styled.View`
  margin-right: 9px;
`

const Button = ({
  children,
  variant = BUTTON_VARIANTS.BLOCK,
  margin = '0 0 10px',
  onPress,
  startIcon,
  isLoading,
  disabled,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      variant={variant}
      margin={margin}
      disabled={Boolean(isLoading || disabled)}
    >
      {isLoading ? (
        <Loader color={COLORS.WHITE} />
      ) : (
        <>
          {startIcon && <StyledIcon>{startIcon}</StyledIcon>}
          <StyledText variant={variant}>{children}</StyledText>
        </>
      )}
    </StyledTouchableOpacity>
  )
}

export default Button
