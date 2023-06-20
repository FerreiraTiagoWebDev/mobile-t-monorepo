import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export default {
  reset(state: any) {
    if (navigationRef.isReady()) {
      navigationRef.reset(state)
    }
  },
  navigate(config: any) {
    if (navigationRef.isReady()) {
      navigationRef.reset(config)
    }
  },
}
