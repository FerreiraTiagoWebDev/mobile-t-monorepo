import React from 'react'
import TextBase from './TextBase'

import type { TextProps } from './TextBase'

const H1 = ({ children, ...props }: React.PropsWithChildren<TextProps>) => (
  <TextBase fontSize={32} lineHeight={40} margin='0 0 30px' isBold {...props}>
    {children}
  </TextBase>
)

export default H1
