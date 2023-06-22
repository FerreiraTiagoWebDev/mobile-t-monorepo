import AsyncStorage from '@react-native-async-storage/async-storage'
import authFetchers from './fetchers'

import type { SetState, GetState } from 'zustand'

const authState = (set: SetState<Store>, get: GetState<Store>): AuthStore => ({
  accessToken: '',
  setAccessToken: async (accessToken: string, email?: string) => {
    await AsyncStorage.setItem('@access_token', accessToken)
    await AsyncStorage.setItem('@email', email ?? '')

    set({ accessToken })
  },
  ...authFetchers(set, get),
})

export default authState
