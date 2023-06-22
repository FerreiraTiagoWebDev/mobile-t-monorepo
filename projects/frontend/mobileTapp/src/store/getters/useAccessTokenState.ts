import { useStore } from '../index'

const useAccessTokenState = () => (
  useStore((store: Store) => store.accessToken ?? '')
)

export default useAccessTokenState
