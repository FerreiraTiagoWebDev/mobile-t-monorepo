import authStoreCreator from './auth'
// import appointmentsStoreCreator from './appointments'
// import partnershipsStoreCreator from './partnerships'
import errorsStoreCreator from './errors'

import type { GetState, SetState } from 'zustand'

export const storesCreator = (set: SetState<Store>, get: GetState<Store>): Store => ({
  ...authStoreCreator(set, get),
  // ...appointmentsStoreCreator(set, get),
  // ...partnershipsStoreCreator(set, get),
  ...errorsStoreCreator(set)
})
