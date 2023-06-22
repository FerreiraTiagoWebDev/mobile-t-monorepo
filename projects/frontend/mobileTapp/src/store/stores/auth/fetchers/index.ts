import fetchAccessToken from './fetchAccessToken'
import deleteAccessToken from './deleteAccessToken'
import refreshAccessToken from './refreshAccessToken'

import type { SetState, GetState } from 'zustand'

const authFetchers = (set: SetState<Store>, get: GetState<Store>) => ({
  fetchAccessToken: fetchAccessToken(set, get),
  deleteAccessToken: deleteAccessToken(set, get),
  refreshAccessToken: refreshAccessToken(set, get),
})

export default authFetchers
