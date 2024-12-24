import { createContext, useState, ReactNode, useContext } from "react";
import { ILogin, IProduct, IRegister, IUser } from "../util/intaerfaces";
import {login,register, getProducts as getProductsapi} from "../util/apiService";

type AppContextType = {
  errorMSG: string | null;
  handleLogIn: (data: ILogin) => void;
  checkUser: () => void;
  getProducts: () => void;
  handleRegister: (data: IRegister) => void;
  loading: boolean;
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
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleLogIn = async (data: ILogin) => {
    
    setLoading(true);
    setErrorMSG(null);
    login(data.email,data.password)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
      })
      .catch(({ response }) => {
        setErrorMSG(response?.data?.detail || "In-Valid login");
        setLoading(false);
      });
  };

  const getProducts = async () => {
    setLoading(true);
    try {
        const response = await getProductsapi();
        console.log("App Context Products:", response); // تحقق من البيانات هنا
        setProducts(response);
    } catch (error) {
        console.error("Error in AppContext getProducts:", error);
    } finally {
        setLoading(false);
    }
};

  const handleRegister = async (data: ILogin) => {
    console.log(data);
    setUser(null);
    setLoading(true);
    register({ email: data.email, password: data.password })
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
    
      const userToken = localStorage.getItem("user");
      if (userToken) {
        try {
          setUser(JSON.parse(userToken));
        } catch (er) {
          setUser(null);
        }
      }
    
  };

  const value = {
    user,
    errorMSG,
    handleLogIn,
    loading,
    handleRegister,
    checkUser,
    products,
    getProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
