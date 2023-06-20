import {COLORS} from '@/mobileTapp/constants';
import React from 'react';
import styled from 'styled-components/native';

interface ScreenContainerProps {
  padding?: string;
  paddingBottom?: string;
  background?: COLORS;
  testID?: string;
}

interface StyledViewProps {
  background?: COLORS;
  paddingStyle?: string;
  paddingBottom?: string;
}

const StyledSafeAreaView = styled.SafeAreaView<{background?: COLORS}>`
  height: 100%;
  width: 100%;
  background: ${props => props.background ?? props.theme.palette.white};
`;

const StyledView = styled.View<StyledViewProps>`
  padding: ${({paddingStyle, theme}) => paddingStyle ?? theme.padding.xl};
  ${({paddingBottom}) =>
    paddingBottom ? `padding-bottom: ${paddingBottom}` : ''};
  width: 100%;
  height: 100%;
  background: ${props => props.background ?? props.theme.palette.white};
`;

const ScreenContainer = ({
  children,
  padding,
  paddingBottom,
  background,
  testID,
}: React.PropsWithChildren<ScreenContainerProps>) => (
  <StyledSafeAreaView background={background}>
    <StyledView
      paddingStyle={padding}
      paddingBottom={paddingBottom}
      background={background}
      testID={testID}>
      {children}
    </StyledView>
  </StyledSafeAreaView>
);

export default ScreenContainer;
