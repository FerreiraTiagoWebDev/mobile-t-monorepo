import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
// import { ForgotPasswordLink } from '@/fsa/components/auth'
// import { useStore } from '@/fsa/store'
// import { I18n } from '@/fsa/helpers'

import Button from '@/mobileTapp/components/Button';
import {TextInput} from '@/mobileTapp/components/form';
import type {StackNavigationProp} from '@react-navigation/stack';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shown, setShown] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const fetchAccessToken = useStore((state) => state.fetchAccessToken)
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  // const onLoginFormSubmit = async () => {
  //   try {
  //     setIsLoading(true)
  //     await fetchAccessToken(email.trim(), password.trim())
  //     navigation.navigate('PartnershipList')
  //   } catch (err) {
  //     // no-op
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   const getEmailFromStorage = async () => {
  //     const email = await AsyncStorage.getItem('@email')
  //     setEmail(email ?? '')
  //   }
  //   setShown(true)
  //   getEmailFromStorage()
  // }, [])

  if (!shown) {
    return null;
  }

  return (
    <>
      <TextInput
        keyboardType="email-address"
        testID="login-email-input"
        // placeholder={I18n.t('auth.email')}
        value={email}
        onChangeText={setEmail}
        textContentType="username" // iOS
        // autoCompleteType="email" // Android
        importantForAutofill="yes" // Android
        autoFocus
      />
      <TextInput
        testID="login-pw-input"
        // placeholder={I18n.t('auth.password')}
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        // autoCompleteType="password"
        importantForAutofill="yes"
        secureTextEntry
      />
      {/* <Button onPress={onLoginFormSubmit} isLoading={isLoading}>{I18n.t('auth.loginCTA')}</Button> */}
      <Button
        onPress={() => console.log('login button pressed')}
        isLoading={isLoading}>
        {'Login'}
      </Button>
      {/* <ForgotPasswordLink /> */}
    </>
  );
};

export default LoginForm;
