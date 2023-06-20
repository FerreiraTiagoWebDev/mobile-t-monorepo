import ScreenContainer from '@/mobileTapp/containers/ScreenContainer';
import React from 'react';
import styled from 'styled-components/native';
// import ErrorsList from '@/fsa/components/ErrorsList'
import {COLORS} from '@/mobileTapp/constants';

interface ContentContainerProps {
  buttons?: React.ReactElement;
  centerAlignChildren?: boolean;
  padding?: string;
  background?: COLORS;
  testID?: string;
}

const StyledWrapView = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const StyledTextView = styled.View<{centerAlignChildren?: boolean}>`
  width: 100%;
  flex: 1;
`;

const StyledButtonView = styled.View`
  width: 100%;
`;

const ContentContainer = ({
  children,
  centerAlignChildren,
  buttons,
  padding,
  background,
  testID,
}: React.PropsWithChildren<ContentContainerProps>) => (
  <ScreenContainer padding={padding} background={background} testID={testID}>
    <StyledWrapView>
      <StyledTextView centerAlignChildren={centerAlignChildren}>
        {/* <ErrorsList /> */}
        {children}
      </StyledTextView>
      {buttons && <StyledButtonView>{buttons}</StyledButtonView>}
    </StyledWrapView>
  </ScreenContainer>
);

export default ContentContainer;
