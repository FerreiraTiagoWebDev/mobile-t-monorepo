import React from 'react';
import TextBase from './TextBase';

import type {TextProps} from './TextBase';

const Text = ({children, ...props}: React.PropsWithChildren<TextProps>) => (
  <TextBase fontSize={16} lineHeight={22} {...props}>
    {children}
  </TextBase>
);

export default Text;
