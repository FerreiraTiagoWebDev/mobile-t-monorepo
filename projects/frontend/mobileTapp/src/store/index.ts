import create from 'zustand'
import { storesCreator } from './stores'

export const useStore = create<Store>((set, get) => storesCreator(set, get))
