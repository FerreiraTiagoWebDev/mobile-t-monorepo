import Button from '@/mobileTapp/components/Button';
import {H1, Text} from '@/mobileTapp/components/typography';
import {COLORS, TEXT_ALIGN} from '@/mobileTapp/constants';
import ConfirmContainer from '@/mobileTapp/containers/ConfirmContainer';
import type {StackNavigationProp} from '@react-navigation/stack';

const LoginContainer = ({
  navigation,
}: {
  navigation: StackNavigationProp<NavigationProps>;
}) => {
  console.log('test');
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
        <H1>
          {/* {I18n.t('auth.login')}
           */}
          {'testing'}
          {/* <Text>My mobile app</Text> */}
        </H1>
        {/* <LoginForm /> */}
        <Button
          onPress={() => {
            console.log('test');
          }}></Button>
      </>
    </ConfirmContainer>
  );
};

export default LoginContainer;
