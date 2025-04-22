import { create } from "zustand"
import { User } from "../types/User/type"

interface UserStore {
    user: User | null;
    getUser:()=> User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
  }

export const useUserStore =create<UserStore>((set,get)=>({
        user: null,
        setUser: (user) => set({ user }),
        getUser: () => get().user, // 현재 상태 반환
        clearUser: () => set({ user: null }),
    })
)