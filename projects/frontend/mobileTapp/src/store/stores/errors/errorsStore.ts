import { generateUuid } from '@/mobileTapp/helpers'

import type { SetState } from 'zustand'

const errorsStore = (set: SetState<Store>): ErrorStore => ({
  errors: [],
  setError: (error: Omit<MobileTappError, 'id'>) => (
    set((state) => ({
      errors: [
        ...state.errors, {
          id: generateUuid(),
          ...error,
        },
      ],
    }))
  ),
  clearError: (errorId: string) => (
    set((state) => ({
      errors: state.errors.filter((error) => error.id !== errorId),
    }))
  ),
  clearErrors: () => set({ errors: [] }),
})

export default errorsStore
