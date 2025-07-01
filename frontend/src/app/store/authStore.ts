import { create } from 'zustand';
import { User } from '../../types';
import { login, signup } from '../lib/api';

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (email, password) => {
    const user = await login(email, password);
    if (user) {
      set({ user });
      return true;
    }
    return false;
  },
  signup: async (email, password, name) => {
    const user = await signup(email, password, name);
    if (user) {
      set({ user });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null });
  },
}));

export default useAuthStore;
