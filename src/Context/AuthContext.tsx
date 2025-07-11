import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from "react";
import api from "@/api/axios";
interface AuthProviderProps {
  children: ReactNode;
}
interface User {
  id: number;
  username: string;
  email: string;
}
interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
}
export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setUser: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get("/auth/me", { withCredentials: true })
      .then((res) => {
        console.log("Fetched from /auth/me:", res.data.user);
        setUser(res.data.user);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
