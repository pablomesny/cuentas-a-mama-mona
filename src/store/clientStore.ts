import { create } from 'zustand';

interface Store {
  clients: string[];
  addClient: (client: string) => void;
}

export const useClientStore = create<Store>((set) => ({
  clients: [],
  addClient: (client) =>
    set((state) => ({ clients: [...state.clients, client] }))
}));
