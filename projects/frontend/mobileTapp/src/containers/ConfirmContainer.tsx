import {COLORS} from '@/mobileTapp/constants';
import ContentContainer from '@/mobileTapp/containers/ContentContainer';
import React from 'react';
import styled from 'styled-components/native';

interface ConfirmContainerProps {
  buttons?: React.ReactElement;
  centerAlignChildren?: boolean;
  background?: COLORS;
  testID?: string;
}

const StyledView = styled.View<{centerAlignChildren?: boolean}>`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  justify-content: center;
`;

const ConfirmContainer = ({
  children,
  centerAlignChildren,
  buttons,
  background,
  testID,
}: React.PropsWithChildren<ConfirmContainerProps>) => (
  <ContentContainer buttons={buttons} background={background} testID={testID}>
    <StyledView centerAlignChildren={centerAlignChildren}>
      {children}
    </StyledView>
  </ContentContainer>
);

export default ConfirmContainer;
