import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainLayout from "./MainLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";

const router = createBrowserRouter([
{
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register/> },
    { path: "/login", element: <Login /> },
    { path: "/not", element: <h1>Login</h1> },
    { path: "/test", element: <Account/> },
  ],
},
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;



