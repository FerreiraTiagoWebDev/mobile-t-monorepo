import React from 'react';
import TextBase from './TextBase';

import type {TextProps} from './TextBase';

const H1 = ({children, ...props}: React.PropsWithChildren<TextProps>) => (
  <TextBase fontSize={32} lineHeight={40} marginBottom={30} isBold {...props}>
    {children}
  </TextBase>
);

export default H1;
