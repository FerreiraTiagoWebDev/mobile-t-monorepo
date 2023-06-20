import {H1} from '@/mobileTapp/components/typography';
import {COLORS, TEXT_ALIGN} from '@/mobileTapp/constants';
import ConfirmContainer from '@/mobileTapp/containers/ConfirmContainer';
import type {StackNavigationProp} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const LoginContainer = ({
  navigation,
}: {
  navigation: StackNavigationProp<NavigationProps>;
}) => {
  // const accessToken = useAccessTokenState()

  // useEffect(() => {
  //   if (accessToken) {
  //     navigation.replace('PartnershipList')
  //   }
  // }, [accessToken])

  return (
    <ConfirmContainer
      testID="login-container"
      background={COLORS.BACKGROUND}
      // buttons={<RegisterAccountMessage />}
    >
      <>
        {/* <H1 align={TEXT_ALIGN.CENTER} color={COLORS.WHITE}> */}
        {/* {I18n.t('auth.login')}
         */}
        <Text>My mobile app</Text>
        {/* </H1> */}
        {/* <LoginForm /> */}
      </>
    </ConfirmContainer>
  );
};

export default LoginContainer;
