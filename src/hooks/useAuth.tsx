import {create} from 'zustand';

type AuthState = {
  isLogged: boolean;
  setLogged: (isLogged: boolean) => void;
};

const useAuth = create<AuthState>((set) => ({
  isLogged: false,
  setLogged: (isLogged) => set({isLogged}),
}));

export default useAuth;
