import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false
}));
