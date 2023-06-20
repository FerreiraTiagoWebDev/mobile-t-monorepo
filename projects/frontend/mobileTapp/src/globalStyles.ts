import COLORS from '@/mobileTapp/constants/COLORS'
import type { DefaultTheme } from 'styled-components'


const defaultTheme: DefaultTheme = {
  borderRadius: '16px',
  palette: {
    black: COLORS.BLACK,
    white: COLORS.WHITE,
    grey100: COLORS.GREY100,
    grey200: COLORS.GREY200,
    grey500: COLORS.GREY500,
    blue100: COLORS.BLUE100,
    primary: {
      main: COLORS.PRIMARY_MAIN,
      dark: COLORS.PRIMARY_DARK,
      hover: COLORS.PRIMARY_HOVER,
    },
    background: COLORS.BACKGROUND,
    success: COLORS.SUCCESS,
    warning: COLORS.WARNING,
  },
  padding: {
    xs: '4px',
    s: '8px',
    base: '12px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
  },
  margin: {
    xs: '4px',
    s: '8px',
    base: '12px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
  },
  font: {
    fontSize: {
      xs: '8px',
      s: '12px',
      base: '16px',
      l: '20px',
      xl: '24px',
      xxl: '28px',
    },
    fontFamily: {
      regular: 'Lato-Regular',
      regularItalic: 'Lato-Italic',
      bold: 'Lato-Bold',
      boldItalic: 'Lato-BoldItalic',
    },
  },
}

export default defaultTheme
