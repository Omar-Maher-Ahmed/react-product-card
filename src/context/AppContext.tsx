import { createContext, useState, ReactNode, useContext } from "react";
import { ILogin, IProduct, IRegister, IUser } from "../util/interfaces";
import apiClient from "../lib/axios";

type AppContextType = {
  errorMSG: string | null;
  handleLogIn: (data: ILogin) => void;
  checkUser: () => void;
  getProducts: () => void;
  handleRegister: (data: IRegister) => void;
  user: IUser | null;
  products: IProduct[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [errorMSG, setErrorMSG] = useState<string | null>(null);
  const [setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleLogIn = async (data: ILogin) => {
    const base64Credentials = btoa(`${data.email}:${data.password}`);
    setLoading(true);
    setErrorMSG(null);
    apiClient
      .get(`/users/login/`, {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      })
      .then(({ data }) => {
        localStorage.setItem("token", `${base64Credentials}`);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      })
      .catch(({ response }) => {
        setErrorMSG(response?.data?.detail || "In-Valid login");
        setLoading(false);
      });
  };

  const getProducts = async () => {
    setLoading(true);
    apiClient
      .get("/products")
      .then((response) => {
        console.log(response);
        setProducts(response?.data);
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRegister = async (data: ILogin) => {
    console.log(data);
    setUser(null);
    setLoading(true);
    apiClient
      .post(`/users/register`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userToken = localStorage.getItem("user");
      if (userToken) {
        try {
          setUser(JSON.parse(userToken));
        } catch (er) {
          setUser(null);
        }
      }
    }
  };

  const value = {
    user,
    errorMSG,
    handleLogIn,
    handleRegister,
    checkUser,
    products,
    getProducts,
    // loading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
