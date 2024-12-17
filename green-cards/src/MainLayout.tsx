import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Sidebar from "./components/Sidebar/Sidebar";

export default function MainLayout() {
return (
  <div className="w-100 ">
      <Navbar />
      {/* <Sidebar /> */}
    <div className="pt-8">
      <Outlet />
    </div>
    <Footer />
  </div>
);
}
