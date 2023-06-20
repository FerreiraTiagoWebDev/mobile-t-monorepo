import 'styled-components'
interface PaletteType {
  main: string
  dark: string
  hover: string
}

interface SizeType {
  xs: string
  s: string
  base: string
  l: string
  xl: string
  xxl: string
}

interface FontFamilyType {
  regular: string
  regularItalic: string
  bold: string
  boldItalic: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      black: string
      white: string
      grey100: string
      grey200: string
      grey500: string
      blue100: string
      primary: PaletteType
      background: string
      success: string
      warning: string
    }
    font: {
      fontSize: SizeType
      fontFamily: FontFamilyType
    }
    padding: SizeType
    margin: SizeType
  }
}
