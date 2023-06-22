import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Link, TextBase} from '@/mobileTapp/components/typography';
// import { useErrorsState } from '@/mobileTapp/store/getters'
import ErrorIcon from '@/mobileTapp/assets/error.svg';
import {COLORS} from '@/mobileTapp/constants';
// import { useStore } from '@/mobileTapp/store'
// import I18n from 'i18n-js'

interface ErrorsListProps {
  isHidden?: boolean;
}

const StyledContainerView = styled.View`
  background: ${props => props.theme.palette.primary.hover};
  display: flex;
  position: absolute;
  z-index: 10;
  top: 50px;
  width: 100%;
  shadow-color: ${props => props.theme.palette.black};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.27;
  shadow-radius: 8px;
  border-radius: 4px;
  padding: ${props => props.theme.padding.base};
  margin-bottom: ${props => props.theme.margin.base};
  elevation: 8;
`;
const StyledWrapView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: ${props => props.theme.font.fontSize.xs};
`;

const ErrorsList = ({isHidden}: ErrorsListProps) => {
  // const errors = useErrorsState()
  // const clearErrors = useStore((state) => state.clearErrors)

  // if (isHidden || errors.length === 0) {
  //   return null
  // }

  return (
    <StyledContainerView>
      {/* <StyledWrapView>
        {errors.map((error) => (
          <View key={error.id}>
            <TextBase fontSize={14} lineHeight={16} color={COLORS.PRIMARY_DARK} >
              {error.message}
            </TextBase>
          </View>
        ))}
        <ErrorIcon />
      </StyledWrapView> */}

      <Link
        onPress={() => console.log('error')}
        color={COLORS.PRIMARY_DARK}
        isBold
        underline>
        {/* {I18n.t('general.close')} */}
        {'error link general close'}
      </Link>
    </StyledContainerView>
  );
};

export default ErrorsList;
