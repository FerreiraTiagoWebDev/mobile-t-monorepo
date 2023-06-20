import React from 'react'
import TextBase from './TextBase'

import type { TextProps } from './TextBase'

const P = ({ children, ...props }: React.PropsWithChildren<TextProps>) => (
  <TextBase fontSize={16} lineHeight={24} margin='0 0 10px' {...props}>
    {children}
  </TextBase>
)

export default P
