import { create } from 'zustand'

const initialUserState = {
  authenticated: false,
  userDetails: {
    userName: "",
    userAddress: ""
  }
}

export const useUserStore = create((set) => ({
  user: initialUserState,
  // currently no functions to update arguement are required
  // inc: () => set((state) => ({ count: state.count + 1 })),
}))