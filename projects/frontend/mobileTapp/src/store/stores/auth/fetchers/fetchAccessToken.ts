import axios from 'axios'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import Config from 'react-native-config'
// import { I18n } from '@/mobileTapp/helpers'

import { ERROR_TYPES } from '@/mobileTapp/constants'
import type { GetState, SetState } from 'zustand'

const fetchAccessToken =
  (set: SetState<Store>, get: GetState<Store>) =>
  async (email: string, password: string) => {
    const { setAccessToken, clearErrors, setError } = get()

    clearErrors()
    if (!email || !password) {
      setError({
        // message: I18n.t('error.input'),
        message: "error input",
        type: ERROR_TYPES.USER,
      })

      throw new Error('no username or password')
    }

    try {
      const res = await axios.post(
        `${Config.MOBILE_T_APP_AUTH_API_BASE}/login?email=${email}&password=${password}`
      )

      const data = jwt_decode<{ uuid: string }>(res.data)
      // segmentClient.identify(data.uuid)

      setAccessToken(res.data, email)
    } catch (err: any) {
      setError({
        // message: I18n.t('error.wrongData'),
        message: "wrong data",
        type: ERROR_TYPES.AUTH,
        status: err.response?.status ?? 401,
      })

      throw err
    }
  }

export default fetchAccessToken
