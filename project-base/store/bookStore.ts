import { create } from 'zustand'

interface IBook {
	amount: number
}

export const useBookStore = create<IBook>(() => ({
	amount: 40,
}))
