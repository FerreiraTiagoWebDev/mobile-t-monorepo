import { RootNavigation } from '@/mobileTapp/helpers'
import axios from 'axios'
import Config from 'react-native-config'

import type { GetState, SetState } from 'zustand'

const refreshAccessToken =
  (set: SetState<Store>, get: GetState<Store>) => async () => {
    const {
      clearErrors,
      deleteAccessToken,
      setAccessToken,
      accessToken,
      email,
    } = get()

    clearErrors()

    try {
      if (!accessToken) {
        throw new Error('No access token')
      }

      const res = await axios.get(`${Config.MOBILE_T_APP_AUTH_API_BASE}/refresh`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })

      setAccessToken(res.data, email)
    } catch (err: any) {
      await deleteAccessToken()
      RootNavigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })

      throw err
    }
  }

export default refreshAccessToken
