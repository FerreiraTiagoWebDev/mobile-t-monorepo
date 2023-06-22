import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { useAnalytics } from '@segment/analytics-react-native'

import { Text } from '@/fsa/components/typography'
import { COLORS, TEXT_ALIGN } from '@/fsa/constants'
import ClickableIconWrapper from '@/fsa/components/ClickableIconWrapper'
import ListIcon from '@/fsa/assets/list.svg'
import LeftChevronIcon from '@/fsa/assets/leftChevron.svg'
import { capitalize, I18n } from '@/fsa/helpers'

const StyledHeaderView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const StyledTextTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`

const NavigationHeader = ({
  header,
  interventionId,
  tab,
}: {
  header?: string | null
  interventionId?: number
  tab?: string
}) => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>()
  const { track } = useAnalytics()

  const onPress = interventionId
    ? () => {
        track('GenericBackButtonPressed')
        tab && navigation.navigate('MainTabs', { screen: capitalize(tab) })
      }
    : () => {
        track('AppointmentListMenuButtonPressed')
        navigation.navigate('PartnershipList')
      }

  return (
    <StyledHeaderView>
      <ClickableIconWrapper onPress={onPress}>
        <>
          {interventionId ? <LeftChevronIcon /> : <ListIcon />}
          {interventionId && (
            <Text isBold color={COLORS.WHITE} align={TEXT_ALIGN.CENTER}>
              {I18n.t('general.back')}
            </Text>
          )}
        </>
      </ClickableIconWrapper>
      <StyledTextTouchableOpacity onPress={onPress}>
        <Text
          isBold
          color={COLORS.WHITE}
          align={interventionId ? TEXT_ALIGN.RIGHT : TEXT_ALIGN.LEFT}
        >
          {interventionId ? interventionId : header}
        </Text>
      </StyledTextTouchableOpacity>
    </StyledHeaderView>
  )
}

export default NavigationHeader
