import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';

import ErrorsList from '@/mobileTapp/components/ErrorsList';
import Loader from '@/mobileTapp/components/Loader';
import {COLORS} from '@/mobileTapp/constants';
import ScreenContainer from '@/mobileTapp/containers/ScreenContainer';
import {Text, View} from 'react-native';

const StyledScreenView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppointmentListContainer = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<NavigationProps>;
  route: RouteProp<MainTabsProps, 'Unplanned'>;
}) => {
  const tab = route.params.tab;
  // const { partnershipId } = usePartnershipState()
  // const { appointments, isLoading } = useAppointmentsFetcher(partnershipId, tab)

  // useEffect(() => {
  //   if (!partnershipId) {
  //     navigation.replace('PartnershipList')
  //   }
  // }, [partnershipId])

  // if (isLoading) {
  //   return <Loader />
  // }

  // if (!partnershipId) {
  //   return null
  // }

  // if (appointments.length === 0) {
  //   return (
  //     <StyledScreenView>
  //       <ErrorsList />
  //       <EmptyAppointmentList tab={tab} />
  //     </StyledScreenView>
  //   )
  // }

  return (
    <ScreenContainer padding="0" background={COLORS.GREY100}>
      <StyledScreenView>
        {/* {appointments.length > 0 && (
          <AppointmentList appointments={appointments} tab={tab} />
        )} */}
        <View>
          <Text>{'Apoointmenet'}</Text>
        </View>
      </StyledScreenView>
    </ScreenContainer>
  );
};

export default AppointmentListContainer;
