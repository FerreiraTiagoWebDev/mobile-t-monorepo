import React from 'react';
import styled from 'styled-components/native';

import {APPOINTMENT_TABS} from '@/mobileTapp/constants';

import BriefcaseIcon from '@/mobileTapp/assets/tab-briefcase.svg';
import ClockIcon from '@/mobileTapp/assets/tab-clock.svg';
import FolderIcon from '@/mobileTapp/assets/tab-folder.svg';

interface TabBarIconProp {
  tab: string | undefined;
  focused: boolean;
  color: string;
}

const StyledMarginView = styled.View`
  margin-top: 7px;
`;

const StyledOuterCircularView = styled.View`
  width: 78px;
  height: 78px;
  border-radius: 39px;
  background-color: ${props => props.theme.palette.white};
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

const StyledInnerCircularView = styled.View<{focused: boolean}>`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${props =>
    props.focused
      ? props.theme.palette.primary.dark
      : props.theme.palette.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabBarIcon = ({tab, focused, color}: TabBarIconProp) => {
  switch (tab) {
    case APPOINTMENT_TABS.UNPLANNED:
      return (
        <StyledMarginView>
          <ClockIcon color={color} />
        </StyledMarginView>
      );

    case APPOINTMENT_TABS.UPCOMING:
      return (
        <StyledOuterCircularView>
          <StyledInnerCircularView focused={focused}>
            <BriefcaseIcon />
          </StyledInnerCircularView>
        </StyledOuterCircularView>
      );
    case APPOINTMENT_TABS.PAST:
      return (
        <StyledMarginView>
          <FolderIcon color={color} />
        </StyledMarginView>
      );
    default:
      return null;
  }
};

export default TabBarIcon;
