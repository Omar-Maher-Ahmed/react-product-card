import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainLayout from "./MainLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";
import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/products", element: <Products /> },
      { path: "/account", element: <Account /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout-page", element: <CheckoutPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const { checkUser } = useAppContext();

  useEffect(() => {
    checkUser();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
