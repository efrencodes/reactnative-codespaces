import { create } from "zustand";

const sessionStore = (set: any, get: any) => ({
    user: {
        userName: ''
    },
    isLoggedIn: false,
    login: (userName: any, password: any) => {
        if (userName && password) {
            set({ user: { userName }, isLoggedIn: true })
        } else {
            alert('User incorrect')
        }
    },
    logout: () => set({ user: { userName: '' }, isLoggedIn: false })
})

export default create(sessionStore)