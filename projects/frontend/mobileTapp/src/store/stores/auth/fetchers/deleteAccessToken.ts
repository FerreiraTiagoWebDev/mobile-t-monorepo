import { APPOINTMENT_TABS, ERROR_TYPES } from '@/mobileTapp/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { I18n } from '@/mobileTapp/helpers'

import type { GetState, SetState } from 'zustand'

const deleteAccessToken =
  (set: SetState<Store>, get: GetState<Store>) => async () => {
    const { clearErrors } = get()
    const { setError } = get()

    clearErrors()

    try {
      await AsyncStorage.removeItem('@access_token')

      set({
        accessToken: '',
        // partnerships: [],
        // appointments: {
        //   [APPOINTMENT_TABS.UPCOMING]: [],
        //   [APPOINTMENT_TABS.PAST]: [],
        //   [APPOINTMENT_TABS.UNPLANNED]: [],
        //   single: undefined,
        // },
      })
    } catch (err: any) {
      setError({
        // message: I18n.t('error.generic'),
        message: "generic error",
        type: ERROR_TYPES.JS,
      })

      throw err
    }
  }

export default deleteAccessToken
