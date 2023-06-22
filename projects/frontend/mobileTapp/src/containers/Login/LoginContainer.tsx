import Button from '@/mobileTapp/components/Button';
import {LoginForm} from '@/mobileTapp/components/auth';
import {H1, Text} from '@/mobileTapp/components/typography';
import {COLORS, TEXT_ALIGN} from '@/mobileTapp/constants';
import ConfirmContainer from '@/mobileTapp/containers/ConfirmContainer';
import type {StackNavigationProp} from '@react-navigation/stack';

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
        <H1 align={TEXT_ALIGN.CENTER}>
          {/* {I18n.t('auth.login')}
           */}
          {'T-App'}
        </H1>
        <LoginForm />
      </>
    </ConfirmContainer>
  );
};

export default LoginContainer;
